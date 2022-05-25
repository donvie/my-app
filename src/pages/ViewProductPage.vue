<template>
  <q-page>
    <van-swipe lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <q-img height="200px" :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-cell>
      <template #title>
        <div class="text-subtitle1 text-weight-bold">Chocolate Cake</div>
        <div>SKU: CKCL04</div>
      </template>
      <template #value>
        <div class="text-h5 text-black text-weight-bold">Php 900</div>
        <div>30% OFF</div>
      </template>
    </van-cell>

    <van-cell size="large">
      <template #title>
        <div>Reviews (14)</div>
        <van-rate size="14px" readonly v-model="value" color="#ffd21e" /> 
      </template>
    </van-cell>

    <van-cell v-for="n in 10" :key="n">
      <template #icon>
        <van-image
          class="q-mr-xs self-center"
          round
          width="48px"
          height="48px"
          :src='`https://robohash.org/${n}`'
        />
      </template>
      <template #title>
        <div>Heridonvi A. Tagaban</div>
        <div>Awesome!!!</div>
      </template>
      <template #value>
        <van-rate size="14px" readonly v-model="value" color="#ffd21e" />
        <div>05.25.2022 1:00 PM</div>
      </template>
    </van-cell>
    <van-notice-bar
      text="Technology is the common soul of the people who developed it."
      left-icon="volume-o"
    />
    <van-action-bar style="z-index: 9999;">
      <!-- <van-action-bar-icon icon="chat-o" text="Icon1" />
      <van-action-bar-icon icon="cart-o" text="Icon2" />
      <van-action-bar-icon icon="shop-o" text="Icon3" /> -->
      <van-action-bar-button icon="add" type="danger" text="Add to cart" />
    </van-action-bar>
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
    const value = ref(3);
    return { images, value };
  },
};
</script>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>