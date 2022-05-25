<template>
  <q-page class="flex flex-center" padding>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="text-center q-py-md">
          <van-image
            round
            width="100"
            height="100"
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
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
        <van-button to="/" block type="primary" native-type="submit">
          Login
        </van-button>
        <van-divider>or</van-divider>
        <van-button to="/" block type="primary" native-type="submit">
          Login with facebook
        </van-button>
        <div class="q-mt-xs">
          <van-button to="/" block type="primary" color="red" native-type="submit">
            Login with google
          </van-button>
        </div>
      </div>
    </van-form>
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
      username,
      password,
      onSubmit,
    };
  },
};
</script>
