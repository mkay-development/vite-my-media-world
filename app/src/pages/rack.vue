<template>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-2" v-for="(item, index) in items">
      <movie-card
        v-if="item.tmdb_typ == 'movie'"
        :identifier="item.tmdb_id"
        :typ="item.typ"
      ></movie-card>
      <series-card v-if="item.tmdb_typ == 'series'"></series-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MovieCard from '@/components/movie/card.vue';
import SeriesCard from '@/components/series/card.vue';

const items = ref([]);

const load = function () {
  fetch('https://backend.my-media.world/api/rack/records', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer: ' + localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      items.value = data.items;
    });
};

onMounted(function () {
  load();
});
</script>
