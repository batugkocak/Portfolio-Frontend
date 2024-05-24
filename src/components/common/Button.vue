<template>
  <button :class="['custom-button', { special: special }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    special: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.custom-button {
  background-color: var(--secondary-bg-color);
  color: var(--text-color);
  border: 1px solid var(--highlight-color);
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  border-radius: 8px;
  border: 3px solid white;

  column-gap: 10px;
  align-items: center;
  display: flex;
}

.custom-button:hover {
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.5);
}

.custom-button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.special {
  background: linear-gradient(
    45deg,
    hsl(290deg 87% 47%) 0%,
    hsl(355deg 100% 65%) 18%,
    hsl(53deg 93% 54%) 100%
  );

  animation: gradientAnimation 5s infinite;
  background-size: 300% 300%;
  border: 3px solid white;
  box-shadow: 0 0 2rem rgba(255, 255, 255, 0.5);
  color: white;
  font-weight: 900;
  animation-play-state: running;
}
.special:hover {
  box-shadow: 0 0 3rem rgba(255, 255, 255, 0.5);
  animation-play-state: paused;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
