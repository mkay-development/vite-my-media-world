<template>
  <div class="app">
    <header class="max-w-5xl px-2 py-2 mx-auto">
      <header-general></header-general>
    </header>
    <main class="max-w-5xl min-h-screen px-2 py-2 mx-auto mt-2 bg-white">
      <router-view></router-view>
    </main>
    <footer class="max-w-5xl px-2 py-2 mx-auto mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script setup>
import { watch, onMounted } from 'vue';
import headerGeneral from './components/header.vue';
import footerGeneral from './components/footer.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/user';

import './tailwind.css';

const route = useRoute();
const store = useUserStore();

watch(route, function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

onMounted(function () {
  store.check();
});
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
