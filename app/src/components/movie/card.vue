<template>
  <section class="px-3 py-3 bg-gray-400 rounded-lg card">
    <router-link :to="'/movie/' + props.identifier">
      <img
        v-if="item.backdrop_path"
        :src="'https://image.tmdb.org/t/p/original' + item.backdrop_path"
        class="mb-2"
    /></router-link>
    <h2 class="mb-2 font-bold">
      {{ item.original_title }} <span class="font-normal">({{props.typ}})</span>
    </h2>
    <p class="text-sm" v-if="item.overview">
      {{ item.overview.slice(0, 100) }} ...
    </p>
    <div class="flex justify-between mt-2 actions">
      <router-link
        :to="'/movie/' + item.id"
        class="block px-2 py-2 text-sm text-center bg-gray-300"
        >Zum Film</router-link
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUpdated, ref } from 'vue';

const item = ref({});

const props = defineProps({
  identifier: {
    require: true,
    type: Number
  },
  typ: {
    require: true,
    typ: String
  }
});

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

onUpdated(function(){
  debounce(load());
});

const load = function () {
  if (localStorage.getItem('movie-' + props.identifier) != null) {
    item.value = JSON.parse(localStorage.getItem('movie-' + props.identifier));
  } else {
    fetch('https://backend.my-media.world/api/movie/' + props.identifier, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer: ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      item
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.item) {
          item.value = data.item;
          localStorage.setItem(
            'movie-' + props.identifier,
            JSON.stringify(data.item)
          );
        }
      });
  }
};

onMounted(function () {
  load();
});
</script>
