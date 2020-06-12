import CommandeService from '../../services/commande.service'

export const gestionnaireStore = {
    namespaced: true,
    state: {
        gestionnaires: []
    },

    actions: {
        async allGestionnaires({commit}){
            try{
                const gestionnaires = await CommandeService.getAllGestionnaires();
                commit('SET_GEST', gestionnaires.data)
            } catch (e) {
                throw new Error(e.message)
            }

        },
        async addGest({commit}, gestionnaire){
            try{
                await CommandeService.newGest(gestionnaire);
                commit('NEW_GEST', gestionnaire)
            } catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_GEST(state, gestionnaires){
            state.gestionnaires = gestionnaires
        },
        NEW_GEST(state, gestionnaire){
            state.gestionnaires.push(gestionnaire)
        }

    }

}