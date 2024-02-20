<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import dog_1 from "@/assets/img/dog_1.jpg";
import dog_2 from "@/assets/img/dog_2.jpg";
import dog_3 from "@/assets/img/dog_3.jpg";
export default {
  data() {
    return {
      slideList: [dog_1, dog_2, dog_3],
      imageList: [
        {
          name: "貓照片",
          path: dog_1,
          is_cat: false,
        },
        {
          name: "狗照片",
          path: dog_2,
          is_cat: true,
        },
        {
          name: "狗照片",
          path: dog_3,
          is_cat: true,
        },
      ],
      el: {
        width: "N/A",
        height: "N/A",
      },
      ref: {
        width: "N/A",
        height: "N/A",
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
  mounted() {
    this.ref.width = this.$refs["ref-example"].clientWidth;
    const divs = this.$refs["ref-example"];
    if (divs && divs.length > 0) {
    // 遍历所有 div 元素
    divs.forEach(div => {
      // 应用样式
      div.style.color = 'red';
    });
  }
    console.log(this.ref.width);
    console.dir(this.$refs["ref-example"]);
  },
};
</script>
<template>
  <!-- swiper -->
  <swiper class="mySwiper border-[1px]">
    <swiper-slide v-for="(item, index) in slideList" :key="index">
      <img :src="slideList[index]" alt="" />
    </swiper-slide>
  </swiper>
  <!-- v-for v-show -->
  <div
    class="img-container m-[10px]"
    v-for="(image, index) in imageList"
    :key="index"
    ref="ref-example"
  >
    {{ image.name }} <br />
    {{ image.is_cat === true ? "有貓" : "無貓不秀" }} <br />
    <img :src="image.path" v-show="image.is_cat" alt="" />
  </div>
  <!-- $ref -->
  <!-- <hr />
  <br /> -->
  <!-- <div>
    el寬度:{{ el.width }}
    <div ref="ref-example" class="bg-[red]">
      ref寬度:{{ ref.width }} 
    </div>
  </div> -->
</template>
<style scoped>
.swiper {
  width: 400px;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
