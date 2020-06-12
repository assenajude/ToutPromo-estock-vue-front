import CommandeService from '../../services/commande.service';

export const achatStore = {
    namespaced: true,
    state: {
        achats: []
    },
    getters: {

    },
    actions: {
        async getAchats ({commit}){
            try {
                const achats = await CommandeService.getAllAchats();
                commit('SET_ACHATS', achats.data)
            } catch (e) {
                throw new Error(e.message)
            }

        },

        async newAchat({dispatch}, achat) {
            try {
                await CommandeService.addAchat(achat);
                dispatch('getAchats')
            } catch (e) {
                throw new Error(e.message)
            }

        }

    },
    mutations: {
        SET_ACHATS(state, payload) {
            state.achats = payload
        }
    }
}