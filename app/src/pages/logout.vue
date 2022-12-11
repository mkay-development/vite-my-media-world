<template>
  <div>Logout</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

let store = useUserStore();

let { loggedin } = storeToRefs(store);

onMounted(function () {
  localStorage.removeItem("token");
  window.location = "/login";
  loggedin = false;
});
</script>
