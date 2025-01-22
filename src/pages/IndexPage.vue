<template>
  <q-page class="bg-yellow-tanoi flex column">
    <section :style="headerIndex">
      <h1 class="text-h2 q-ma-none text-white">{{ t('mainTitle') }}</h1>
    </section>
    <section style="margin-top: -30px" class="q-px-xl flex justify-center full-width">
      <q-select
        v-model="borough"
        :label="t('labelBorough')"
        class="input-search"
        bg-color="grey-maimin"
        rounded
        outlined
        style="width: 800px"
        :options="searchStore.boroughs"
      >
        <template v-slot:after>
          <q-btn
            label="Search"
            :style="`height: ${sizeOfInput}px; margin-left: -100px; width: 200px; z-index: 1;`"
            color="black"
            outlined
            rounded
            @click="search"
          />
        </template>
      </q-select>
    </section>
    <section class="flex justify-center items-center q-mx-xl" style="flex-grow: 1">
      <h2 class="text-h3">
        {{ t('mainText') }}
      </h2>
    </section>
    <section class="flex justify-center q-px-xl" style="gap: 20px">
      <q-card
        v-for="(accommodation, key) in accommodations.slice(0, 5)"
        :key="key"
        class="accommodation-card"
      >
        <CardAccommodation :accommodation="accommodation" />
      </q-card>
    </section>
  </q-page>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useSearchStore } from 'stores/search-store.js'
import CardAccommodation from 'components/CardAccommodation.vue'
import { useMeta } from 'quasar'

const searchStore = useSearchStore()
const image = '../public/assets/background.webp'

const { t } = useI18n()
const router = useRouter()

const accommodations = computed(() => searchStore.accommodations)
const headerIndex = computed(() => ({
  height: '500px',
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const sizeOfInput = ref(0)
const borough = ref('')

const search = () => {
  router.push({
    name: 'search',
    params: { search: borough.value },
  })
  // Définir le titre de l'onglet
}

onMounted(() => {
  const size = document.querySelector('.input-search')
  sizeOfInput.value = size.offsetHeight
})

useMeta({
  title: 'Home',
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
