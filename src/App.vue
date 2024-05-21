<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
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
}

.content-router {
  max-width: 90%;
  margin: 0 auto 0 auto;
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
