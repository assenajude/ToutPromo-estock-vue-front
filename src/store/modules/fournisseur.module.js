import CommandeService from '../../services/commande.service'

export const fournisseurStore = {
    namespaced: true,
    state: {
        fournisseurs: []
    },
    getters: {
        getFournById: (state) => (id) => {
            return state.fournisseurs.find(fournisseur => fournisseur.id === id)
        }

    },
    actions: {
        async getFournisseurs({commit}) {
            try{
                const fourniss = await CommandeService.getAllFourn();
                commit('SET_FOURN', fourniss.data)
            } catch (e) {
                throw new Error(e.message)
            }

        },
        async newFourn({dispatch}, fournisseur) {
            try{
                await CommandeService.addfourn(fournisseur);
                await dispatch('getFournisseurs')

            } catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_FOURN(state, payload) {
            state.fournisseurs = payload
        }
    }
}