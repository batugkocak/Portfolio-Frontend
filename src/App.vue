<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Footer from "./components/common/Footer.vue";
import Navbar from "./components/common/Navbar.vue";
import RouteHeader from "./components/common/RouteHeader.vue";
</script>

<template>
  <Navbar class="navbar" />
  <div class="wrapper">
    <main class="content">
      <RouteHeader />
      <div class="content-router">
        <RouterView class="router-view" v-slot="{ Component }">
          <Transition name="page-opacity" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  margin: 70px auto 0px auto;
  max-width: 70%;
  min-width: 60%;
}

.content-router {
  /* First option */
  max-width: 90%;

  margin: 1% auto 0 auto;
  /* Second option: */
  /* margin-left: 3%; */

  /* Background tests: */
  /* background-image: linear-gradient(
    45deg,
    hsl(290deg 87% 47%) 0%,
    hsl(355deg 100% 65%) 18%,
    hsl(53deg 93% 54%) 100%
  ); */

  /* border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 1%; */
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 0.5s ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
