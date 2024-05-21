<template>
  <div>
    <TypingText
      v-if="currentRouteName"
      :text="currentRouteName.toLocaleUpperCase()"
    />
    <Divider color="#ffff" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Divider from "./Divider.vue";
import TypingText from "./TypingText.vue";

const route = useRoute();

const currentRouteName = computed(() => route.name);
</script>

<style scoped></style>
