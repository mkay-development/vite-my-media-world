<template>
  <div>
    <div class="flex justify-between mb-3">
      <div class="mt-2 headline">
        <h2 class="text-lg">
          <span class="font-bold title">{{ item.original_title }}</span> -
          <span class="text-sm"> {{ item.tagline }}</span>
        </h2>
      </div>
      <div class="flex space-x-3 actions">
        <div class="px-2 py-2 space-x-3 bg-gray-300 rounded-lg add-to-rack" @click="addToWishlist()">
          <fa icon="plus" />Add to Wishlist
        </div>
        <div class="px-2 py-2 space-x-3 bg-gray-300 rounded-lg add-to-rack" @click="addToRack()">
          <fa icon="plus" />Add to Rack
        </div>
      </div>
    </div>
    <img
      v-if="item.backdrop_path"
      :src="'https://image.tmdb.org/t/p/original' + item.backdrop_path"
      class="mb-2"
    />
    <div class="flex justify-between">
      <div class="flex genres">
        <h2 class="mt-2 mr-3 font-bold">Genres:</h2>
        <div
          class="px-2 py-2 mr-3 bg-gray-300 rounded-lg genre"
          v-for="(genre, index) in item.genres"
        >
          {{ genre.name }}
        </div>
      </div>
      <div class="homepage">
        <a :href="item.homepage" class="mt-2" target="_blank">Zur Homepage</a>
      </div>
    </div>
    <p>{{ item.overview }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

let item = ref({});
let route = useRoute();

let load = function () {
  fetch("https://backend.my-media.world/api/movie/" + route.params.id, {
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
      item.value = data.item;
    });
};

let addToWishlist = function(){
    console.log(route.params.id);
}

let addToRack = function(){
    console.log(route.params.id);
}

onMounted(function () {
  load();
});
</script>
