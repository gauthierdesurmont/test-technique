import { defineStore } from 'pinia'
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top',
  timeout: 4000,
})

export const useAuthenticateStore = defineStore('authenticate', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // ecouter le localstorage si il y a utilisateur déjà connecté
    authModal: false,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [], // pareil pour les favoris
  }),
  getters: {
    isAuthenticated() {
      return this.user !== null
    },
  },
  actions: {
    async authenticateUser(user) {
      // enlever le si user.password !== du mdp d'env
      if (user.username === process.env.USERNAME_APP && user.password == process.env.PASSWORD) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user)); // sauvegarder les infos de l'utilisateur lors de la connnexion
        Notify.create({
          color: 'positive',
          message: 'You are now logged in!',
        })
        return user
      } else {
        Notify.create({
          color: 'negative',
          message: 'Invalid username or password!',
        })
        return null
      }
    },
    async logoutUser() {
      this.user = null;
      localStorage.removeItem('user'); // lors de la deconnexion, supprimer les infos de l'utilisateur
      Notify.create({
        color: 'positive',
        message: 'You are now logged out!',
      })
    },
    openAuthModal() {
      this.authModal = !this.authModal
    },
    addToFavorites(favorite) {
      // Check if the favorite already exists
      const existingFavorite = this.favorites.find((f) => f.id === favorite.id)
      if (existingFavorite) {
        Notify.create({
          color: 'negative',
          message: 'This favorite already exists!',
        })
        return false
      } else {
        this.favorites.push(favorite)
        localStorage.setItem('favorites', JSON.stringify(this.favorites)); // sauvegarder les fav dans le localstorage
        Notify.create({
          color: 'positive',
          message: 'Favorite added!',
        })
      }
    },
    removeFromFavorites(favorite) {
      this.favorites = this.favorites.filter((f) => f.id !== favorite.id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites)); // mettre à jour les fav
      Notify.create({
        color: 'positive',
        message: 'Favorite removed!',
      })
    },
  },
})
