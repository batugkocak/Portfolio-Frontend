<template>
  <div>
    <nav :class="{ hidden: isHidden }">
      <div class="logo">
        <!-- <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="Logo"
        /> -->
        <span class="emoji">😎</span>
        <router-link to="/" class="site-name">Batuğ Koçak</router-link>
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <ul class="nav-menu" :class="{ open: isMenuOpen }">
        <li class="nav-item">
          <router-link to="/about" class="nav-link" @click="toggleMenu"
            >About</router-link
          >
          <hr class="menu-divider" />
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-link" @click="toggleMenu"
            >Skills</router-link
          >
          <hr class="menu-divider" />
        </li>
        <li class="nav-item">
          <router-link to="/education" class="nav-link" @click="toggleMenu"
            >Education</router-link
          >
          <hr class="menu-divider" />
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" @click="toggleMenu"
            >Contact</router-link
          >
          <hr class="menu-divider" />
        </li>
        <li class="nav-item">
          <router-link to="/socials" class="nav-link" @click="toggleMenu"
            >Socials</router-link
          >
          <hr class="menu-divider" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      windowWidth: window.innerWidth,
      isHidden: false,
      lastScrollPosition: 0,
      threshold: 100,
      isMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (
        currentScrollPosition > this.lastScrollPosition &&
        currentScrollPosition > this.threshold
      ) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      this.lastScrollPosition =
        currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleMenu() {
      if (this.isMobile) {
        this.isMenuOpen = !this.isMenuOpen;
      }
    },
  },
  computed: {
    isMobile() {
      return this.windowWidth < 768;
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary-bg-color);
  padding: 0.5rem 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
  font-family: Helvetica;
  font-weight: bold;
}

nav.hidden {
  transform: translateY(-100%);
}

.logo {
  display: flex;
  align-items: center;
  margin-left: 2%;
}
.logo a {
  padding: 5px;
}
.logo a:hover {
  border-radius: 5px;
  background-image: linear-gradient(
    45deg,
    hsl(290deg 87% 47%) 0%,
    hsl(355deg 100% 65%) 18%,
    hsl(53deg 93% 54%) 100%
  );

  animation: gradientAnimation 3s infinite;
  background-size: 300% 300%;
}

.logo img {
  height: 30px;
  margin-right: 1rem;
}

.site-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.menu-divider {
  display: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin-right: 2%;
}

.nav-item {
  margin: 0 1rem;
  font-weight: bold;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
}
.nav-item .router-link-active {
  color: var(--link-color);
}

.nav-link:hover {
  color: #ddd;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 2%;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
}
.emoji {
  font-size: 28px;
  padding: 2px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  .menu-divider {
    height: 1px;
    background-color: #555;
    margin: 0.5rem 0;
    border: none;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    left: auto;
    width: 40%;
    background-color: #333;
    padding: 1rem;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-item {
    margin: 0.5rem 0;
  }
  .nav-item .router-link-active {
    color: var(--link-color);
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
