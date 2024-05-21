<template>
  <h1 :style="{ minHeight: minHeight + 'px' }">{{ displayedText }}</h1>
</template>

<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  minHeight: {
    type: Number,
    default: 50,
  },
});

const displayedText = ref("");
const typingTimeout = ref(null);

const clearTypingTimeout = () => {
  if (typingTimeout.value) {
    clearTimeout(typingTimeout.value);
    typingTimeout.value = null;
  }
};

const typeText = async (text) => {
  displayedText.value = "";
  for (let i = 0; i < text.length; i++) {
    await new Promise((resolve) => {
      typingTimeout.value = setTimeout(resolve, 100);
    });
    displayedText.value += text[i];
  }
};

watch(
  () => props.text,
  async (newText) => {
    clearTypingTimeout();
    await nextTick();
    typeText(newText);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  clearTypingTimeout();
});
</script>

<style scoped>
h1 {
  min-height: var(--min-height, 50px);
}
</style>
