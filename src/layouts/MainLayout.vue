<template>
  <q-layout view="hHh Lpr lff">
    <HeaderComponent />
    <DrawerAccommodation />
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComponent from 'components/HeaderComponent.vue'
import DrawerAccommodation from 'components/DrawerAccommodation.vue'
</script>
