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

    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- Coupon List -->
    <van-popup
      v-model:show="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

    <van-submit-bar style="z-index: 999999" :price="3050" button-text="Submit" />
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const coupon = {
      available: 1,
      originCondition: 0,
      reason: '',
      value: 150,
      name: 'Coupon name',
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: '1.5',
      unitDesc: '元',
    };

    const coupons = ref([coupon]);
    const showList = ref(false);
    const chosenCoupon = ref(-1);

    const onChange = (index) => {
      showList.value = false;
      chosenCoupon.value = index;
    };
    const onExchange = (code) => {
      coupons.value.push(coupon);
    };

    return {
      coupons,
      showList,
      onChange,
      onExchange,
      chosenCoupon,
      disabledCoupons: [coupon],
    };
  }
};
</script>
