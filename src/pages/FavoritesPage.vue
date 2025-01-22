<template>
  <q-page class="q-px-xl">
    <h1 class="q-my-none">FavoritesPage</h1>
    <section class="flex" style="gap: 20px">
      <q-card v-for="(accommodation, key) in favorites" :key="key" class="accommodation-card">
        <CardAccommodation :accommodation="accommodation" />
      </q-card>
    </section>
  </q-page>
</template>
<script setup lang="ts">
import CardAccommodation from 'components/CardAccommodation.vue'
import { useAuthenticateStore } from 'stores/authenticate-store.js'
import { computed } from 'vue'
import { useMeta } from 'quasar'

const authenticateStore = useAuthenticateStore()

const favorites = computed(() => authenticateStore.favorites)

useMeta({
  title: 'Favorites',
})
</script>

<style lang="scss" scoped>
.accommodation-card {
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
    transition: box-shadow 0.3s;
  }
}
</style>
