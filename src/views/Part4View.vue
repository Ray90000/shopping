<script>
export default {
  data() {
    return {
      firstName: "小名",
      lastName: "趙",
      haveMoney: 500,
      usedMoney: 133,
      ntd: 100,
      usdRate: 31.22,
      jpnRate: 0.22,
      lastName2: "",
      firstName2: "",
      postNo: "220",
      city: "新北市",
      area: "板橋區",
      address: "中山路一段",
    };
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName;
    },
    usage() {
      return (this.usedMoney / this.haveMoney) * 100;
    },
    usd: function () {
      return Math.round((this.ntd / this.usdRate) * 100) / 100;
    },
    jpn: function () {
      return Math.round((this.ntd / this.jpnRate) * 100) / 100;
    },
    fullName2: {
      get() {
        return this.lastName2 || this.firstName2
          ? this.lastName2 + " " + this.firstName2
          : "";
      },
    },
    fullAddress2() {
      return (
        this.postNo + " " + this.city + " " + this.area + " " + this.address
      );
    },
  },
};
</script>
<template>
  <section class="p-[50px] w-[100dvw] flex flex-col gap-4">
    <h1>4-1 自訂義組合變數-computed</h1>
    <div>
      <h2>practice-1:</h2>
      {{ fullName }} 擁有 {{ haveMoney }}，使用了{{
        usedMoney
      }}後，錢的使用率為{{ usage }}
    </div>
    <div>
      <h2>ex-1:</h2>
      台幣:
      <input type="text" v-model="ntd" />
      <ul>
        <li>美元:{{ usd }}</li>
        <li>日元:{{ jpn }}</li>
      </ul>
    </div>
    <div>
      <h2>ex-2:</h2>
      <div>姓: <input type="text" v-model="lastName2" /></div>
      <div>名: <input type="text" v-model="firstName2" /></div>
      <div>郵遞區號: <input type="text" v-model="postNo" /></div>
      <div>縣/市: <input type="text" v-model="city" /></div>
      <div>區域: <input type="text" v-model="area" /></div>
      <div>位址: <input type="text" v-model="address" /></div>
      <ul>
        <li>全名:<input type="text" v-model="fullName2"/></li>
        <li>完整地址: {{ fullAddress2 }}</li>
      </ul>
    </div>
  </section>
  <section></section>
</template>
<style>
input {
  @apply border-[1px] border-[black];
}
</style>
