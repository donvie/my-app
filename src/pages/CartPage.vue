<template>
  <q-page>
    <van-swipe-cell>
      <van-card
        num="2"
        title="Title"
        desc="Description"
        price="2.00"
        thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">Tag</van-tag>
          <van-tag plain type="danger">Tag</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">Button</van-button>
          <van-button size="mini">Button</van-button>
        </template>
      </van-card>
      <template #right>
          <van-button square text="Delete" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-submit-bar style="z-index: 999999" :price="3050" button-text="Submit" />
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    return {
    };
  }
};
</script>

<style>
  .goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
</style>