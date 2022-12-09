<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <input type="text" class="block" v-model="search" />
      </div>
    </div>
    <div class="grid grid-cols-6 gap-3 results">
      <div
        class="col-span-6 result md:col-span-2"
        v-for="(result, index) in results"
      >
        <movie-card :identifier="result.id" :typ="'dvd'"></movie-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import movieCard from "@/components/movie/card.vue";

let search = ref("");
let results = ref([]);

let load = function () {
  fetch("https://backend.my-media.world/api/movies/search", {
    method: "POST",
    headers: {
      Authorization: "Bearer: " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: search.value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results.value = data.items;
    });
};

watch(search, function () {
  load();
});
</script>
