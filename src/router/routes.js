import { useAuthenticateStore } from 'stores/authenticate-store.js'

const routes = [
  {
    path: '/:lang?',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Home' },
        name: 'home',
      },
      {
        // mettre le paramètre en optionnel pour pouvoir acceder à search
        path: 'search/:search?',
        component: () => import('pages/SearchPage.vue'),
        meta: { title: 'Search' },
        name: 'search',
      },
      {
        path: 'favorites',
        component: () => import('pages/FavoritesPage.vue'),
        meta: { title: 'Favorites' },
        name: 'favorites',
        beforeEnter: (to, from, next) => {
          const { isAuthenticated, openAuthModal } = useAuthenticateStore()
          // inverser la condition pour ne pas avoir acces a la page favorites lors qu'on est déco & enlever la modal lorsqu'on est co
          if (isAuthenticated) {
            next()
          } else {
            next({ name: 'home', params: { lang: to.params.lang } })
            openAuthModal()
          }
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { title: '404' },
    name: 'notFound',
  },
]

export default routes
