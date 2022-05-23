<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          size="8"
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        >
          <div>
            Already building an app with it...
            
            <van-grid :border="false" :column-num="3" class="q-mt-xs">
              <van-grid-item>
                <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
              </van-grid-item>
              <van-grid-item>
                <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg" />
              </van-grid-item>
              <van-grid-item>
                <van-image src="https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" />
              </van-grid-item>
            </van-grid>
          </div>
        </q-chat-message>

        <q-chat-message
          size="8"
          sent
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        >
          <div>
            Already building an app with it...
            
            <van-grid :border="false" :column-num="3" class="q-mt-xs">
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
            </van-grid>
          </div>
        </q-chat-message>
      </div>
    </div>

    <van-cell-group inset>
      <van-field
        class="bg-grey-2"
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="Message"
        show-word-limit
      />
    </van-cell-group>
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const message = ref('')
    return {
      message
    };
  }
};
</script>