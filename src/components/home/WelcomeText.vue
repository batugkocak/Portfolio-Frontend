<template>
  <TypingText
    v-if="currentText"
    :text="currentText"
    :writingTime="writingTime"
    textColor="#f7df1e"
    :class="customClass"
  />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import TypingText from "../common/TypingText.vue";

const props = defineProps({
  textList: {
    type: Array,
    required: true,
  },
  delay: {
    type: Number,
    default: 4000,
  },
  writingTime: {
    type: Number,
    default: 1000,
  },
  customClass: { type: String, default: null },
});

const currentTextIndex = ref(0);

const currentText = computed(() => props.textList[currentTextIndex.value]);

let intervalId;

onMounted(() => {
  startTypingAnimation();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

watch(() => props.textList, startTypingAnimation);

function startTypingAnimation() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    currentTextIndex.value++;
    if (currentTextIndex.value >= props.textList.length) {
      currentTextIndex.value = 0;
    }
  }, props.delay);
}
</script>
