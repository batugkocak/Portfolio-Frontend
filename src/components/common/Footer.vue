<template>
  <footer id="footer">
    <Divider
      style="margin: 0 auto 0 auto"
      color="#ffff"
      thickness="0.1px"
      length="70%"
    />
    <div class="top-section">
      <Logo
        link="https://github.com/batugkocak"
        logo="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        height="30"
        width="30"
        background="true"
      />
      <Logo
        link="https://x.com/batugkocak"
        logo="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        height="30"
        width="30"
      />
    </div>

    <div class="bottom-section">
      <div>Batuğ Koçak</div>
      <div>•</div>
      <div>© {{ currentYear }}</div>
      <div>•</div>
      <div>Build with <a href="https://vuejs.org/">Vue.js</a></div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";
import Divider from "./Divider.vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
#footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--background-color);
  color: grey;
}

.top-section,
.bottom-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
