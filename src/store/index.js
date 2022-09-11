import { createStore } from 'vuex'

export default createStore({
    state: {
        isView: true,
        isAgenda: false,
        vista: {
            ciudad: "",
            titulo: "",
            imgCard: "",
            recamaras: "",
            baños: "",
            estacionamientos: "",
            metros: "",
            descripcion: "",
            precio: "",
            colonia: "",
            calle: "",
            vendedor: "",

        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})