<template>
  <q-drawer
    v-if="accommodation"
    side="right"
    v-model="drawerRight"
    :width="800"
    class="bg-grey-maimin absolute"
    bordered
    elevated
    show-if-above
    overlay
  >
    <q-btn @click="close" class="absolute-top-left" rounded icon="close" flat />

    <q-btn
      v-if="isAuthenticated && !alreadyInFavorites"
      flat
      round
      dense
      label="favoris"
      class="absolute-top-right q-mr-lg"
      @click.stop="authenticateStore.addToFavorites(accommodation)"
    />
    <q-btn
      v-if="isAuthenticated && alreadyInFavorites"
      flat
      round
      dense
      label="Supprimer"
      class="absolute-top-right q-mr-lg"
      @click.stop="authenticateStore.removeFromFavorites(accommodation)"
    />
    <img src="../../public/assets/background.webp" alt="accommodation.title" class="image-accommodation" />

    <section class="q-px-md">
      <h1 class="text-h3 q-ma-none">
        {{ accommodation.category }} {{ accommodation?.bedrooms }}
        {{ t('bedrooms', parseFloat(accommodation?.bedrooms)).toLocaleLowerCase() }}
      </h1>
      <p class="q-mt-md">{{ accommodation.title }}</p>
    </section>
  </q-drawer>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useSearchStore } from 'stores/search-store.js'
import { useAuthenticateStore } from 'stores/authenticate-store.js'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const searchStore = useSearchStore()
const authenticateStore = useAuthenticateStore()

const isAuthenticated = computed(() => authenticateStore.isAuthenticated)
const alreadyInFavorites = computed(() => {
  return authenticateStore.favorites.some((favorite) => favorite.id === accommodation.value.id)
})

const drawerRight = ref(false)

const accommodation = computed(() => searchStore.accommodation)

const close = () => {
  drawerRight.value = false
  searchStore.setAccommodation(null)
}

watch(accommodation, () => {
  drawerRight.value = true
})
</script>

<style lang="scss" scoped>
.image-accommodation {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
}
</style>
