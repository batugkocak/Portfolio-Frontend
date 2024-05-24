<template>
  <p
    class="custom-h1"
    :style="{ minHeight: minHeight + 'px', color: textColor }"
  >
    {{ displayedText }}
  </p>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  minHeight: {
    type: Number,
    default: 50,
  },
  writingTime: {
    type: Number,
    default: 1000, // 1000ms = 1 second, matching original behavior
  },
  textColor: {
    type: String,
    default: "var(--text-color)", // Default color
  },
});

const displayedText = ref("");
let typingInterval; // Use a variable to track the interval

const stopTyping = () => {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
};

const typeText = (text) => {
  displayedText.value = "";
  let i = 0;
  const typingSpeed = props.writingTime / text.length; // Calculate delay per letter

  typingInterval = setInterval(() => {
    displayedText.value += text[i];
    i++;
    if (i >= text.length) {
      stopTyping();
    }
  }, typingSpeed);
};

watch(
  () => props.text,
  (newText) => {
    stopTyping(); // Stop any ongoing typing
    typeText(newText);
  },
  { immediate: true }
);

onBeforeUnmount(stopTyping);
</script>
