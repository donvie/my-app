<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-3">
    <q-header class="bg-transparent" flat>
      <!-- <q-toolbar> -->
        <van-nav-bar
          title="CakeFizz"
          left-text="Back"
          right-text="Button"
          left-arrow
        >
          <template #left>
            <van-icon size="24px" name="wap-nav" />
          </template>
          <template #right>
            <van-icon size="24px" name="shopping-cart" />
          </template>
        </van-nav-bar>
      <!-- </q-toolbar> -->
      <!-- @click-left="onClickLeft"
      @click-right="onClickRight" -->
      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          My Application
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar> -->
    </q-header>

    <q-footer class="bg-transparent" flat>
      <q-toolbar>
        <van-tabbar route>
          <van-tabbar-item to="/home" icon="home-o">Home</van-tabbar-item>
          <van-tabbar-item icon="search" dot>Search</van-tabbar-item>
          <van-tabbar-item to="/checkout" icon="friends-o" badge="5">Profile</van-tabbar-item>
          <van-tabbar-item to="/profile" icon="setting-o" badge="20">Settings</van-tabbar-item>
        </van-tabbar>
      </q-toolbar>
    </q-footer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
