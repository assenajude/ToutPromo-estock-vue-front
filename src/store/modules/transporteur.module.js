import CommandeService from '../../services/commande.service'

export const transporteurStore = {
    namespaced: true,
    state: {
        transporteurs: []

    },
    getters: {
        getTransportBy: (state) => (id) => {
            return state.transporteurs.find(transporteur => transporteur.id === id)
        }

    },
    actions: {
        async getAllTransport({commit}){
            try{
                const allTransports = await CommandeService.getTransporteurs();
                commit('SET_TRANSPORT', allTransports.data)
            } catch (e) {
                throw new Error(e.message)
            }

        },
        async addNewTransport({dispatch}, payload) {
            try{
                await CommandeService.addTransporteur(payload);
                await dispatch('getAllTransport')
            } catch (e) {
                throw new Error(e.message)
            }

        }

    },
    mutations: {
        SET_TRANSPORT(state, payload) {
            state.transporteurs = payload
        }
    }

}