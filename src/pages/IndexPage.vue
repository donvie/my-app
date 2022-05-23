<template>
  <q-page padding>
    <!-- <lazy-component>
      <img v-for="(img, ind) in imageList" v-lazy="img" :key="ind" />
    </lazy-component> -->
    <van-button type="primary">Primary</van-button>
    <van-button type="success">Success</van-button>
    <van-button type="default">Default</van-button>
    <van-button type="danger">Danger</van-button>
    <van-button type="warning">Warning</van-button>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="Username"
          label="Username"
          placeholder="Username"
          :rules="[{ required: true, message: 'Username is required' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          label="Password"
          placeholder="Password"
          :rules="[{ required: true, message: 'Password is required' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          Submit
        </van-button>
      </div>
    </van-form>

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

    <van-empty description="Description" />
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      // imageList: [
      //   'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      //   'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
      // ],
      username,
      password,
      onSubmit,
    };
  },
};
</script>
