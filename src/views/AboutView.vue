<script>
export default {
  data() {
    return {
      top: 50,
      left: 50,
    };
  },
  methods: {
    moveY(value) {
      this.top += value;
    },
    moveX(value) {
      this.left += value;
    },
  },
};
</script>
<template>
  <div class="w-[100vh] h-[100vh]">
    <input
      class="item bg-[red] relative "
      value="移動我"
      @keydown.down="moveY(10)"
      @keydown.up="moveY(-10)"
      @keydown.left="moveX(-10)"
      @keydown.right="moveX(10)"
      :style="{ top: `${top}px`, left: `${left}px` }"
      
    />
  </div>
</template>

<style></style>
