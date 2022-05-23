<template>
  <q-page class="flex flex-center">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="text-center">
          <van-image
            round
            width="100"
            height="100"
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <van-field
          v-model="name"
          name="Name"
          label="Name"
          placeholder="Name"
          :rules="[{ required: true, message: 'Name is required' }]"
        />
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
        <van-field v-model="tel" type="tel" label="Phone" />
        <van-field name="switch" label="Switch">
          <template #input>
              <van-switch v-model="checked" size="20" />
          </template>
        </van-field>
        <van-field name="radio" label="Gender">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="1">Male</van-radio>
              <van-radio name="2">Female</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="uploader" label="Uploader">
          <template #input>
            <van-uploader v-model="value" />
          </template>
        </van-field>
        <van-field
          v-model="result"
          is-link
          readonly
          name="calendar"
          label="Calendar"
          placeholder="Select date"
          @click="showCalendar = true"
        />
        <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button to="/" block type="primary" native-type="submit">
          Register
        </van-button>
      </div>
    </van-form>
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const username = ref('');
    const password = ref('');
    const tel = ref('');
    const checked = ref(false);
    const checked1 = ref('1');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    const value = ref([
      { url: 'https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
    ]);

    const result = ref('');
    const showCalendar = ref(false);
    const onConfirm = (date) => {
      result.value = `${date.getMonth() + 1}/${date.getDate()}`;
      showCalendar.value = false;
    };

    return {
      name,
      username,
      password,
      tel,
      checked,
      checked1,
      value,
      result,
      onConfirm,
      showCalendar,
      onSubmit,
    };
  },
};
</script>
