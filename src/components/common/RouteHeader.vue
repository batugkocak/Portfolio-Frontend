<template>
  <h1 v-if="currentRouteName">{{ currentRouteName.toLocaleUpperCase() }}</h1>
  <Divider color="#ffff" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Divider from "./Divider.vue";

const route = useRoute();

const currentRouteName = computed(() => route.name);
</script>

<style scoped></style>
