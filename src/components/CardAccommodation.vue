<template>
  <q-card-section class="q-pa-none">
    <q-btn
      v-if="isAuthenticated && !alreadyInFavorites"
      flat
      round
      dense
      label="favoris"
      class="absolute-top-right q-mr-sm"
      @click.stop="authenticateStore.addToFavorites(accommodation)"
    />
    <q-btn
      v-if="isAuthenticated && alreadyInFavorites"
      flat
      round
      dense
      label="Supprimer"
      class="absolute-top-right q-mr-sm"
      @click.stop="authenticateStore.removeFromFavorites(accommodation)"
    />
    <img src="../../public/assets/background.webp" alt="accommodation.title" class="image-accommodation" />
  </q-card-section>
  <q-card-section class="q-py-none">
    <h1 class="text-h5 q-ma-none">
      {{ accommodation.category }}
      {{ accommodation?.bedrooms }}
      {{ t('bedrooms', parseFloat(accommodation?.bedrooms)).toLocaleLowerCase() }}
    </h1>
    <p class="q-ma-none">{{ accommodation.title }}</p>
    <q-separator class="q-my-sm" />
    <p class="q-ma-none">{{ accommodation.borough }}</p>
    <q-separator class="q-my-sm" />
    <p class="flex justify-between">
      <span class="q-ma-none">Loyer:</span>
      <span>{{ accommodation.price }}€</span>
    </p>
    <q-separator class="q-my-sm" />
    <p class="flex justify-between items-center">
      <q-rating v-model="ratingValue" readonly />
      <span class="q-ml-sm">{{ accommodation.reviews }} avis</span>
    </p>
  </q-card-section>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import { useAuthenticateStore } from 'stores/authenticate-store.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const authenticateStore = useAuthenticateStore()

const isAuthenticated = computed(() => authenticateStore.isAuthenticated)
const alreadyInFavorites = computed(() => {
  return authenticateStore.favorites.some((favorite) => favorite.id === props.accommodation.id)
})

const props = defineProps({
  accommodation: {
    type: Object,
    required: true,
    default: () => ({
      borough: '',
      category: '',
      bedrooms: 0,
      city: '',
      country: '',
      id: 0,
      image: '',
      price: 0,
      rating: 0,
      reviews: 0,
      title: '',
    }),
  },
})

const ratingValue = ref(props.accommodation.rating)
</script>

<style lang="scss" scoped>
.image-accommodation {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
</style>
