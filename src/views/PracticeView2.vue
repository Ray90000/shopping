<script>
export default {
  data() {
    return {
      checkValue: [],
      options: [
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
      ],
    };
  },
  methods: {
    watchCheckValue() {
      console.log(this.checkValue);
    },
  },
};
</script>

<template>
  <div>
    <label v-for="(option, index) in options" :key="index"
      ><input type="checkbox" v-model="checkValue" :value="option.value" @input="watchCheckValue" />{{
        option.text
      }}</label
    >
  </div>
</template>
<style scoped></style>
