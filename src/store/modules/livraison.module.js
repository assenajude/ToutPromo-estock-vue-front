import CommandeService from '../../services/commande.service'

export const livraisonStore = {
    namespaced: true,
    state: {
        livraisons: [],
        idLivraison:0

    },
    getters: {
        getLivraisonById: (state) => (id) => {
            id = state.idLivraison
            return state.livraisons.find(livraison => livraison.id === id)
        }

    },
    actions: {
        async getAllLivraisons({commit}) {
            try {
                const allLivraisons = await CommandeService.getLivraisons();
                commit('SET_LIVRAISONS', allLivraisons.data)
            } catch (e) {
                throw new Error(e.message)
            }
        },
        async newLivraison({dispatch}, livraison) {
            try {
                await CommandeService.addLivraison(livraison)
                dispatch('getAllLivraisons')
            } catch (e) {
                throw new Error(e.message)
            }
        }

    },
    mutations: {
        SET_LIVRAISONS(state, payload) {
            state.livraisons = payload
        },
        UPDATE_IDLIVRAISON(state, id) {
            state.idLivraison = id
        }

    }
}