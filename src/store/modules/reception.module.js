import CommandeService from '../../services/commande.service'
export const receptionStore = {
    namespaced: true,
    state: {
        receptions: []
    },
    getters: {

    },
    actions: {
        async getReceptions({commit}) {
            try{
                const receptions = await CommandeService.getAllReceptions();
                if (receptions) {
                    commit('SET_RECEP', receptions.data)
                }
            } catch (e) {
                throw new Error(e.message)
            }

        },
       async saveReception({dispatch}, payload) {
            try{
                await CommandeService.newReception(payload);
                dispatch('getReceptions')
            } catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_RECEP(state, payload) {
            state.receptions = payload
        }
    }
}