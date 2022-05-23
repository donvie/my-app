<template>
  <q-page padding>
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <q-img height="200px" :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="n in 5" :key="n">
        <q-card flat>
          <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />

          <q-card-section class="q-pa-none">
            <div>Our Changing Planet</div>
            <div>by John Doe</div>
          </q-card-section>
        </q-card>
      </van-grid-item>
    </van-grid>


    <van-grid :column-num="3">
      <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="Text" />
    </van-grid>

    <van-grid :border="false" :column-num="4">
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
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

