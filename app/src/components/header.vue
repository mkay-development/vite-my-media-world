<template>
  <div class="flex justify-between mt-2 vc-header">
    <span
      ><router-link to="/" class="ml-2 text-xl font-bold text-white"
        >my-media.world</router-link
      ></span
    >
    <nav class="mt-2">
      <ul class="flex space-x-3">
        <li v-if="loggedin"><router-link to="/rack">Rack</router-link></li>
        <li v-if="loggedin">
          <router-link to="/wishlist">Wishlist</router-link>
        </li>
        <li v-if="loggedin">Logout</li>
        <li v-if="!loggedin"><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';
const store = useUserStore();

const { loggedin } = storeToRefs(store);

onMounted(function () {
  store.check();
});
</script>
