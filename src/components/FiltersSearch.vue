<template>
  <section class="flex justify-between items-center">
    <div class="flex q-my-lg" style="gap: 10px">
      <q-select
        v-model="form.borough"
        :label="t('labelBorough')"
        placeholder="Choisir un quartier"
        class="input-search"
        bg-color="grey-maimin"
        outlined
        :options="searchStore.boroughs"
        style="width: 300px"
      />
      <q-select
        v-model="form.category"
        :label="t('labelBorough')"
        class="input-search"
        bg-color="grey-maimin"
        outlined
        :options="searchStore.categories"
        style="width: 200px"
      />
      <q-input
        v-model="form.bedrooms"
        label="Nombre de chambre"
        class="input-search"
        bg-color="grey-maimin"
        outlined
        style="width: 200px"
      />
      <q-input
        v-model="form.min"
        label="Loyer min"
        class="input-search"
        bg-color="grey-maimin"
        outlined
        style="width: 200px"
      />
      <q-input
        v-model="form.max"
        label="Loyer max"
        class="input-search"
        bg-color="grey-maimin"
        outlined
        style="width: 200px"
      />
    </div>
    <div class="flex" style="gap: 10px">
      <q-btn
        label="Reset"
        color="black"
        outlined
        @click="
          () => {
            emit('reset')
            resetForm()
          }
        "
        :style="`height: ${sizeOfInput}px`"
      />
      <q-btn
        label="Filtrer"
        color="black"
        outlined
        @click="emit('search')"
        :style="`height: ${sizeOfInput}px`"
        :disable="filtersIsEmpty"
      />
      <q-btn
        label="Enregistrer la recherche"
        color="yellow-tanoi"
        text-color="black"
        outlined
        @click="save"
        :style="`height: ${sizeOfInput}px`"
      />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, toRefs, computed, defineProps, defineEmits } from 'vue'
import { useSearchStore } from 'stores/search-store.js'
import { useAuthenticateStore } from 'stores/authenticate-store.js'

const searchStore = useSearchStore()
const authenticateStore = useAuthenticateStore()

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const props = defineProps({
  form: Object,
})
const emit = defineEmits(['search', 'reset'])

const { form } = toRefs(props)

const isAuthenticated = computed(() => authenticateStore.isAuthenticated)
const filtersIsEmpty = computed(() => {
  return Object.values(form.value).every((value) => value === null)
})

const sizeOfInput = ref(0)

const save = () => {
  if (isAuthenticated.value) {
    searchStore.saveSearch(form.value)
  } else {
    authenticateStore.openAuthModal()
  }
}

const resetForm = () => {
  Object.keys(form.value).forEach((key) => {
    form.value[key] = null
  })
  if (route.params.search) {
    router.push({ name: 'search' })
  }
}

onMounted(() => {
  const size = document.querySelector('.input-search')
  sizeOfInput.value = size.offsetHeight
  if (route.params.search) {
    form.value.borough = route.params.search
  }
})
</script>
