<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/common/Footer.vue";
import Navbar from "./components/common/Navbar.vue";
</script>

<template>
  <Navbar class="navbar" />
  <main class="content">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<style scoped>
.content {
  flex: 1;
  margin-top: 60px;
  /*
  margin-right: auto;
  margin-left: auto; */
  margin: 60px auto 0px auto;
  max-width: 70%;
}
</style>
