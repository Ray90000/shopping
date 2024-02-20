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
          name: '貓照片',
          path: dog_1,
          is_cat: false,
        },
        {
          name: '狗照片',
          path: dog_2,
          is_cat: true,
        },
        {
          name: '狗照片',
          path: dog_3,
          is_cat: true,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>
<template>
  <swiper class="mySwiper border-[1px]" >
    <swiper-slide v-for="(item, index) in slideList" :key="index" >
      <img :src="slideList[index]" alt="" />
    </swiper-slide>
  </swiper>
  <div class="img-container m-[10px]" v-for="(image, index) in imageList" :key="index">
    {{ image.name }} <br/>
    {{ image.is_cat === true ? '有貓' : '無貓不秀' }} <br/>
    <img :src="image.path" v-show="image.is_cat" alt="">
  </div>
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
