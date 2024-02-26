<script>
export default {
  data() {
    return {
      mainID: "",
      subID: "",
      currentSubList: [],
      typeList: [
        {
          id: 1,
          name: "飲料",
          sub: [
            { id: 1, name: "紅茶" },
            { id: 2, name: "綠茶" },
            { id: 3, name: "麥茶" },
          ],
        },
        {
          id: 2,
          name: "蛋糕",
          sub: [
            { id: 1, name: "蜂蜜蛋糕" },
            { id: 2, name: "起司蛋糕" },
            { id: 3, name: "巧克力蛋糕" },
          ],
        },
        {
          id: 3,
          name: "麵包",
          sub: [
            { id: 1, name: "吐司" },
            { id: 2, name: "肉鬆麵包" },
          ],
        },
      ],
    };
  },
  watch: {
    mainID: {
      handler: function (newID, oldID) {
        if (newID == "") {
          this.currentSubList = [];
        } else {
          const tempItem = this.typeList.find((typeItem) => {
            return typeItem.id == newID;
          });
          this.currentSubList = tempItem.sub;
        }
      },
    },
  },
};
</script>
<template>
  <div class="w-[100vw] p-[50px]">
    <h1 class="mt-[20px]">4-2,資料監聽變化及自動處理-watch</h1>
    <p>Option API - watch使用時,監聽屬性名可為:</p>
    <ul class="list-disc pl-[20px]">
      <li>資料模型(data)的屬性</li>
      <li>自訂義組合變數(computed)的屬性名</li>
    </ul>
  </div>
  <div class="w-[100vw] p-[50px]">
    <h1>範例4-3</h1>
    <div>
      餐點分類:
      <select v-model="mainID" class="w-[100px] border-[1px] border-[black]">
        <option value="">請選擇</option>
        <option v-for="item in typeList" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      餐點:
      <select v-model="subID" class="w-[100px] border-[1px] border-[black]">
        <option value="">請選擇</option>
        <option v-for="item in currentSubList" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<style></style>
