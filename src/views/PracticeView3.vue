<script>
import dog_1 from "@/assets/img/dog_1.jpg";
import dog_2 from "@/assets/img/dog_2.jpg";
import dog_3 from "@/assets/img/dog_3.jpg";
export default {
  data() {
    return {
      age: "",
      name: "",
      list: [{ name: "Ray", age: 23 }],
      preview: "",
      imageList: [
        { src: dog_1, name: "圖片1", isShow: false },
        { src: dog_2, name: "圖片2", isShow: false },
        { src: dog_3, name: "圖片3", isShow: false },
      ],
    };
  },
  methods: {
    add() {
      this.list.push({ name: this.name, age: this.age });
      this.name = "";
      this.age = "";
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    handleChange(event) {
      let file = event.target.files[0];
      if (file) {
        this.preview = window.URL.createObjectURL(file);
      }
    },
    handleMouseover(index){
        this.imageList[index].isShow = true;
    },
    handleMouseleave(index){
        this.imageList[index].isShow = false;
    },
    showMsg(message){
        alert(message);
    },
  },
};
</script>
<template>
  <!-- 建立表單 -->
  <div class="pt-[20px]">
    <label
      >姓名:
      <input type="text" class="border-[1px] border-[black]" v-model="name"
    /></label>
    <label
      >年齡:
      <input type="number" class="border-[1px] border-[black]" v-model="age"
    /></label>
    <button @click="add" class="border-[1px] border-[black] p-[2px]">
      新增
    </button>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        姓名:{{ item.name }} 年齡:{{ item.age }}
        <button
          @click="remove(index)"
          class="border-[1px] border-[black] p-[2px]"
        >
          刪除
        </button>
      </li>
    </ul>
    <!-- 圖片上傳 -->
  </div>
  <div class="pt-[20px]">
    <input type="file" @change="handleChange" />
    <img class="w-[300px]" v-if="preview" :src="preview" alt="123test" />
  </div>
  <!-- 圖片樣式切換 -->
  <div v-for="(image, index) in imageList" :key="index">
    <img :src="image.src" alt="123" class="w-[300px] h-[200px] pt-[10px]" @mouseover="handleMouseover(index)" @mouseleave="handleMouseleave(index)" />
    <div v-if="image.isShow">{{ image.name }}</div>
  </div>
  <div class="w-[400px] h-[400px] bg-[red] flex justify-center items-center" @click="showMsg('父曾')">
    <div class="bg-[yellow] h-[100px] w-[100px]  flex justify-center items-center" @click.stop="showMsg('子曾')">
        點擊對象
    </div>
  </div>

</template>
<style></style>
