<template>
  <router-view />
  <q-dialog v-model="authModal" :persistent="false">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Connexion</div>
        <q-btn
          flat
          round
          dense
          icon="close"
          class="absolute-top-right"
          @click="authenticateStore.openAuthModal()"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form>
          <q-input v-model="form.username" label="Nom d'utilisateur" autocomplete="email" />
          <q-input
            v-model="form.password"
            label="Password"
            type="password"
            autocomplete="current-password"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          label="Connexion"
          color="black"
          v-close-popup
          flat
          :disable="disabled"
          @click="
            () => {
              authenticateStore.authenticateUser(form)
              authenticateStore.openAuthModal()
            }
          "
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthenticateStore } from 'stores/authenticate-store.js'

const authenticateStore = useAuthenticateStore()

const authModal = computed(() => authenticateStore.authModal)
const disabled = computed(() => {
  return Object.values(form.value).some((value) => !value)
})

const form = ref({
  username: '',
  password: '',
})
</script>
