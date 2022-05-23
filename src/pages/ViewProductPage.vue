<template>
  <q-page>
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <q-img height="200px" :src="image" />
      </van-swipe-item>
    </van-swipe>
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
