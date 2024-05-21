<template>
  <div :class="dividerClass" :style="dividerStyle"></div>
</template>

<script>
export default {
  name: "Divider",
  props: {
    orientation: {
      type: String,
      default: "horizontal", // or 'vertical'
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
    thickness: {
      type: [String, Number],
      default: "1px",
    },
    color: {
      type: String,
      default: "#000",
    },
    length: {
      type: [String, Number],
      default: "100%",
    },
  },
  computed: {
    dividerClass() {
      return {
        "divider-horizontal": this.orientation === "horizontal",
        "divider-vertical": this.orientation === "vertical",
      };
    },
    dividerStyle() {
      if (this.orientation === "horizontal") {
        return {
          borderTopWidth: this.thickness,
          borderTopColor: this.color,
          width: this.length,
        };
      } else {
        return {
          borderLeftWidth: this.thickness,
          borderLeftColor: this.color,
          height: this.length,
        };
      }
    },
  },
};
</script>

<style scoped>
.divider-horizontal {
  border-top-style: solid;
  width: 100%;
}
.divider-vertical {
  border-left-style: solid;
  height: 100%;
}
</style>
