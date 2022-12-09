<template>
  <div class="vp-home">
    <h2 class="mb-3 text-lg font-bold">Willkommen bei My Media World</h2>
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-6 md:col-span-2" v-for="(movie, index) in movies">
        <movie-card :identifier="movie.id"></movie-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MovieCard from "@/components/movie/card.vue";

let movies = ref([]);

onMounted(() => {
  load();
});

let load = function () {
  fetch("https://backend.my-media.world/api/movies/upcoming", {
    method: "GET",
    headers: {
      Authorization: "Bearer: " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      movies.value = data.items.results.reverse().slice(-6);
    });
};
</script>
