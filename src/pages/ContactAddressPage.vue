<template>
  <q-page>
    <!-- <van-cell is-link>
      <template #icon>
        <van-button icon="plus" size="small" type="primary" />
      </template>
      <template #title>
        <div class="self-center q-ml-md">Add contact address</div>
      </template>
    </van-cell>
    <br><br> -->
    <van-contact-card add-text="Add contact address" type="add" />
    <!-- <van-contact-card type="edit" :tel="tel" :name="name"  />
    <van-contact-card
      type="edit"
      name="John Snow"
      tel="13000000000"
      :editable="false"
    />

    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="Set as the default contact"
      @save="onSave"
      @delete="onDelete"
    /> -->
  </q-page>
</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const tel = ref('13000000000');
    const name = ref('John Snow');
    const onEdit = () => Toast('edit');

    return {
      tel,
      name,
      onEdit,
    };
  }
};
</script>
