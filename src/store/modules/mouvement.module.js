import CommandeService from '../../services/commande.service'
export const mouvementStore = {
    namespaced: true,
    state: {
        mouvements: [],
        qteFinStock: 0

    },

    getters: {

    },

    actions: {
        async getMouvements({commit}) {
            try{
                const allMouvements = await CommandeService.getAllMouvement();
                commit('SET_MVT', allMouvements.data)
            } catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_MVT(state, mouvements) {
            state.mouvements = mouvements
        },
        SET_QTEFIN(state, qte)  {
            state.qteFinStock += qte
        }
    }
}