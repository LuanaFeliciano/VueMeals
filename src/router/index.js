import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PratoNomeView from '../views/PratoNome.vue'
import PratoIngredienteView from '../views/PratoIngrediente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PesquisaNome',
      name: 'pesquisaNome',
      component: PratoNomeView
    },
    {
      path: '/PesquisarPorIngrediente',
      name: 'pesquisaPorIngrediente',
      component: PratoIngredienteView
    },
  ]
})

export default router
