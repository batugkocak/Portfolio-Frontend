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
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  border-radius: 8px;
  border: 3px solid white;
}

.custom-button:hover {
  background-color: #555;
  border-color: #666;
}

.custom-button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.special {
  background-image: linear-gradient(
    45deg,
    hsl(290deg 87% 47%) 0%,
    hsl(355deg 100% 65%) 18%,
    hsl(53deg 93% 54%) 100%
  );

  animation: gradientAnimation 3s infinite;
  background-size: 300% 300%;
  border: 3px solid white;
  box-shadow: 0 0 4px white;
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
