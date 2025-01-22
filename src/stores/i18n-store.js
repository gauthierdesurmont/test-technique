import { defineStore } from 'pinia'
import { i18n } from 'src/boot/i18n'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    locale: 'fr-FR',
  }),
  actions: {
    async setLocale(locale) {
      this.locale = locale
      i18n.global.locale.value = locale
    },
  },
  persist: true,
})
