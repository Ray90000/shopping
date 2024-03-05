<script>
export default {
  data() {
    return {
      list: [],
    };
  },

  watch: {
    list: function (newList, oldList) {
      console.log("一般", this.$refs.ullist.offsetHeight);
      this.$nextTick(function () {
        console.log("nextTick", this.$refs.ullist.offsetHeight);
      });
    },
  },
};
</script>
<template>
  <div id="app">
    <button @click="list.push(list.length + 1)">追加</button>
    <ul ref="ullist">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<style></style>
