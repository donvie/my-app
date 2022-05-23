<template>
  <q-page>
    <van-image
      width="100%"
      height="150"
      fit="fill"
      src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />

    <!-- <van-grid :border="false">
      <van-grid-item icon-color="blue" icon="location" text="Location" />
      <van-grid-item icon-color="blue" icon="like" text="Like" />
      <van-grid-item icon-color="blue" icon="star" text="Star" />
      <van-grid-item icon-color="blue" icon="phone" text="Phone" />
    </van-grid> -->

    <van-grid :border="false">
      <van-grid-item>
        <q-avatar color="primary" text-color="white" icon="directions" />
        <div>Direction</div>
      </van-grid-item>
      <van-grid-item>
        <q-avatar color="red" text-color="white" icon="edit" />
        Edit
      </van-grid-item>
      <van-grid-item>
        <q-avatar color="secondary" text-color="white" icon="star" />
        Star
      </van-grid-item>
      <van-grid-item>
        <q-avatar color="amber" text-color="white" icon="phone" />
        Phone
      </van-grid-item>
    </van-grid>

    <van-cell-group class="q-mb-md">
      <van-cell title="Profile" icon="user-o" is-link />
      <van-cell title="Payments" icon="credit-pay" is-link />
      <van-cell title="History" icon="underway-o" is-link />
      <van-cell title="Settings" icon="setting-o" is-link />
    </van-cell-group>

    <van-button plain block>Logout</van-button>
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
