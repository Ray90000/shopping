<script>
export default {
  data() {
    return {
      buyList: [],
      showList: [],
      totalPrice: 0,
      selectProduction: "",
      productions: [
        { id: 1, name: "紅茶", price: 30 },
        { id: 2, name: "綠茶", price: 25 },
        { id: 3, name: "奶茶", price: 40 },
        { id: 4, name: "珍珠奶茶", price: 50 },
        { id: 5, name: "咖啡", price: 35 },
      ],
    };
  },
  methods: {
    buy() {
      if (this.selectProduction !== "") {
        this.buyList.push(this.selectProduction);
        this.selectProduction = "";
      }
    },
  },
  watch: {
    buyList: {
      handler: function (newList, oldList) {
        let total = 0;
        let show = [];
        const prods = this.productions;
        newList.forEach((productionID) => {
          const selectProd = prods.find((production) => {
            return production.id == productionID;
          });
          if (selectProd.price !== undefined) {
            total += selectProd.price;
            show.push(selectProd);
          }
        });
        this.showList = show;
        this.totalPrice = total;
      },
      deep: true,
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-4 mt-[100px]">
    <div>
      <select
        v-model="selectProduction"
        name=""
        id=""
        class="border-[1px] border-[black]"
      >
        <option value="">請選擇</option>
        <option v-for="item in productions" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <button @click="buy" class="border-[1px] border-[black] ml-[5px]">
        購買
      </button>
    </div>
    <div>購買產品:
        <ul class="list-disc pl-[20px]">
            <li v-for="item in showList" :key="item.id">{{ item.name }}-{{ item.price }}</li>
        </ul>
    </div>
    <div>總價:{{ totalPrice }}</div>
  </div>
</template>
<style></style>
