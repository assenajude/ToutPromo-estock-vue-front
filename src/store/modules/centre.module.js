import CommandeService from '../../services/commande.service'
export const centreStore = {
    namespaced: true,
    state: {
        centres: [],
        newIdCentre: 1
    },
    getters: {
      centreById: (state) => (id) => {
          return state.centres.find(centre => centre.id === id)
      },
        categoriesByCentre: (state, getters) =>(id) => {
          if (id && getters.centreById(id)) {
              return getters.centreById(id).categories
          } else {
              return [];
          }
        },

        produitsByCentre: (state, getters) =>(id) => {
            id = state.centreId;
            if (id && getters.categoriesByCentre(id)) {
                return getters.categoriesByCentre(id).produits
            } else return []
        },
        budgetsByCentre: (state, getters) =>(id) => {
            id = state.centreId;
            if (id && getters.produitsByCentre(id)) {
                return getters.produitsByCentre(id).budgets
            } else return []
        },


    },
    actions: {
        async getCentres({commit}){
            try{
                const newCentres = await CommandeService.getCentres();
                commit('SET_CENTRE', newCentres.data)

            } catch (e) {
                throw new Error(e.message)
            }
        },
        async addNew({dispatch}, newCentre){
            try{
                await CommandeService.addCentre(newCentre);
                dispatch('getCentres')

            } catch (e) {
                throw new Error(e.message)
            }
        }

    },
    mutations: {
        SET_CENTRE(state, centres){
            state.centres = centres
        },
        UPDATE_ID(state, id){
            state.newIdCentre = id
        }

    }
}