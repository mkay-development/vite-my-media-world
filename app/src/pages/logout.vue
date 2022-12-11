<template>
  <div>Logout</div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(function () {
  localStorage.removeItem("token");
  window.location = "/login";
});
</script>
