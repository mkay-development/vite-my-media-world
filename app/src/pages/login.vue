<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-3">
      <div class="form-group">
        <label class="block px-2 py-2 bg-gray-400">Email</label>
        <input
          type="text"
          class="w-full px-2 py-2 bg-gray-300"
          placeholder="mail@jmartz.de"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label class="block px-2 py-2 bg-gray-400">Password</label>
        <input
          type="password"
          class="w-full px-2 py-2 bg-gray-300"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="actions"><button @click.prevent="submit()">Abschicken</button></div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { ref } from "vue";

let email = ref('');
let password = ref('');

const store = useUserStore();

let submit = function () {
  store.login(email.value, password.value);
};
</script>
