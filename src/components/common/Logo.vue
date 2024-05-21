<template>
  <div :class="{ background: background }">
    <a :href="link" class="centered-link"
      ><img :src="logo" :height="height" :width="width"
    /></a>
  </div>
</template>

<script setup>
defineProps(["logo", "link", "height", "width", "background"]);
</script>

<style>
.background {
  background-color: var(--secondary-background-color);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
}
.centered-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
