<template>
  <div class="flex justify-between mt-2 vc-header">
    <span
      ><router-link to="/" class="ml-2 text-xl font-bold text-white"
        >my-media.world</router-link
      ></span
    >
    <nav class="mt-2">
      <ul class="hidden space-x-3 md:flex desktop-nav">
        <li v-if="loggedin"><router-link to="/rack">Rack</router-link></li>
        <li v-if="loggedin">
          <router-link to="/wishlist">Wishlist</router-link>
        </li>
        <li v-if="loggedin">
          <router-link to="/search">Search</router-link>
        </li>
        <li v-if="loggedin">Logout</li>
        <li v-else><router-link to="/login">Login</router-link></li>
      </ul>
      <ul class="flex mobile-nav md:hidden">
        <fa icon="bars" @click="navStore.toggle()" />
      </ul>
    </nav>
  </div>
  <div
    class="w-full px-2 py-2 mt-3 text-center text-black bg-gray-400 vc-nav-content md:hidden"
    :class="{ hidden: !open }"
  >
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-2">
        <router-link to="/rack">Schrank</router-link>
      </div>
      <div class="col-span-2">
        <router-link to="/search">Suche</router-link>
      </div>
      <div class="col-span-2">
        <router-link to="/wishlist">Wunschliste</router-link>
      </div>
      <div class="col-span-2">
        <router-link v-if="loggedin" to="/login">Login</router-link>
        <router-link v-else to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
import { useNavStore } from "@/store/nav";
import { onMounted } from "vue";

const store = useUserStore();
const navStore = useNavStore();

const { loggedin } = storeToRefs(store);
const { open } = storeToRefs(navStore);

onMounted(function () {
  store.check();
});
</script>
