<template>
  <div>
    <div class="grid grid-cols-6">
      <div class="flex col-span-6 mb-3 space-x-3">
        <label class="block px-2 py-2 bg-gray-400">Suche</label>
        <input
          type="text"
          class="block px-2 py-2 bg-gray-300"
          v-model="search"
        />
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
