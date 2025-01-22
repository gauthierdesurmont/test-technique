<template>
  <q-chip v-for="(v, k) in savedSearch" :key="k" clickable @click="emit('search', v)">
    <p v-if="!v.borough && !v.min && !v.max && !v.bedrooms" class="q-mb-none">Search 1</p>
    <p v-else class="q-mb-none">
      {{ v.borough || '' }} {{ v.min || '' }} {{ v.max || '' }} {{ v.bedrooms || '' }}
    </p>
    <q-btn
      flat
      color="negative"
      icon="delete"
      @click="emit('delete', k)"
    />
  </q-chip>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from 'stores/search-store.js'

const emit = defineEmits(['search', 'delete'])

const searchStore = useSearchStore()

const savedSearch = computed(() => searchStore.savedSearch)
</script>
