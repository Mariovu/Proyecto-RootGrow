import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View from '../views/View.vue'
import Register from '../views/Register.vue'
import firebase from '../firebase'
import Inmueble from '../views/Inmueble.vue'
import Mispublicaciones from '../views/MisPublicaciones.vue'
import Editar from '../views/Editar.vue'



const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/view',
        name: 'view',
        component: View,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: { requiresAuth: false }

    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresAuth: false }
    },
    {
        path: '/inmueble',
        name: 'Inmueble',
        component: Inmueble,
        meta: { requiresAuth: true }

    },
    {
        path: '/mispublicaciones',
        name: 'mispublicaciones',
        component: Mispublicaciones,
        meta: { requiresAuth: true }

    },
    {
        path: '/editar',
        name: 'editar',
        component: Editar,
        meta: { requiresAuth: true }

    }




]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const rutaApp = to.matched.some(record => record.meta.requiresAuth)

    if (rutaApp) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next()
            } else {
                next({ name: 'Login' })
            }
        })
    } else {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next({ name: 'home' })
            } else {
                next()
            }
        })
    }
})



export default router;