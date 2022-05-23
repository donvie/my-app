<template>
  <q-page>
    <van-card
      num="2"
      price="2.00"
      title="Title"
      desc="Description"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    />
    <van-card
      num="2"
      tag="Tag"
      price="2.00"
      title="Title"
      desc="Description"
      origin-price="10.00"
      thumb="https://cdn.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    />
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
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {

    return {
    };
  },
};
</script>
