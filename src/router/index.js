import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage';
import Accueil from "../views/Accueil";
import Register from "../views/Register";
import Login from "../views/Login";
import Fichier from '../views/Fichier';
import Vente from '../components/vente'
import Impression from "../components/Impression";
import EntreeStock from "../views/EntreeStock";
import SortieStock from "../views/SortieStock"
import PeriodiqueStock from "../views/PeriodiqueStock";
import InventaireStock from "../views/InventaireStock";
import NotFound from "../views/NotFound"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        component: Accueil
      },
      {
        path: '/accueil',
        name: 'accueil',
        component: Accueil
      },
      {
        path: '/entree',
        name: 'entree',
        component: EntreeStock
      },
      {
        path: '/periode-stock',
        name: 'periode-stock',
        component: PeriodiqueStock
      },
      {
        path: '/inventaire',
        name: 'inventaire',
        component: InventaireStock
      },
      {
        path: '/sortie',
        name: 'sortie',
        component: SortieStock
      },
      {
        path: '/fichier',
        name: 'fichier',
        component: Fichier
      },
      {
        path: '/vente',
        name: 'vente',
        component: Vente
      },
      {
        path: '/impression',
        name: 'impression',
        component: Impression
      }
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
    {
      path: '*',
      name: '/not-found',
      component: NotFound
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});