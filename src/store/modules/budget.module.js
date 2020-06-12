import CommandeService from '../../services/commande.service'
export const budgetStore = {
    namespaced: true,
    state: {
        budgets : [],
        centreId: 0,
        budgetId: 0
    },

    getters: {
        budgetById: (state) => (id) => {
            return state.budgets.find(budget => budget.id === id)
        },

        findByBudgetsByCentreId: (state) => (id) => {
            id = state.centreId
            if(id === 0){
                return state.budgets
            } else {
                return state.budgets.filter(budget => budget.produit.categorie.centres[0].id === id)
            }
        },

    },
    actions: {
      async getAllBudgets({commit}){
          const allBudgets = await CommandeService.getBudgets();
          commit('SET_BUDGET', allBudgets.data)
        },
        async addNew({dispatch}, budget){
          try{
            await CommandeService.addBudget(budget);
              await dispatch('getAllBudgets')
          } catch (e) {
              throw new Error(e.message)
          }

        }

    },
    mutations : {
        SET_BUDGET(state, budgets){
            state.budgets = budgets
        },
        ADD_BUDGET(state, budget){
            state.budgets.push(budget)
        },
        UPDATE_CENTREID(state, id){
            state.centreId = id
        },
        UPDATE_BUDGETID(state, id){
            state.budgetId = id
        }
    }

}