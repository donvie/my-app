<template>
  <q-page padding>
    <!-- <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <q-img height="200px" :src="image" />
      </van-swipe-item>
    </van-swipe> -->

    <van-grid :border="false" :column-num="2" :gutter="10" class="q-mb-md">
      <van-grid-item v-for="n in 5" :key="n">
        <van-image :src='`https://robohash.org/${n}`' />
        <div class="text-subtitle2">Our Changing Planet</div>
        <div class="text-subtitle2 text-weight-bold">Php 100</div>
        <div class="text-caption text-weight-bold">20% OFF</div>
      </van-grid-item>
    </van-grid>


    <van-grid :column-num="3" :gutter="10">
      <van-grid-item v-for="n in 12" :key="n">
        <van-image :src='`https://robohash.org/${n}`' />
        <div class="text-caption">Planet</div>
      </van-grid-item>
    </van-grid>
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const images = [
      'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];

    return { images };
  },
};
</script>

