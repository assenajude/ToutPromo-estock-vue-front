import CommandeService from '../../services/commande.service'
export const reserveStore = {
    namespaced: true,
    state: {
        reserves: [],
        centreIdInReserve: 0,
        idReserve: 0,
    },

    getters: {

        getReserveById: (state) => (id) => {
            return state.reserves.find(reserve =>reserve.id === id )
        },

        findReserveByCentreId: (state) => (id) => {
            id = state.centreIdInReserve;
            if(id === 0){
                return state.reserves
            } else {
                return state.reserves.filter(reserve => reserve.budget.produit.categorie.centres[0].id === id)
            }
        }
    },

    actions: {
        async getReserves({commit}){
            try{
                const freshReserves = await CommandeService.getAllReservations();
                commit('SET_RESERVE', freshReserves.data)
            } catch (e) {
                throw new Error(e.message)
            }
        },
        async newReserve({dispatch}, reserve){
            try{
                await CommandeService.addReserve(reserve);
                await dispatch('getReserves');
            } catch (e) {
                throw new Error(e.message)
            }
        }
    },

    mutations: {
        SET_RESERVE(state, payload){
            state.reserves = payload
        },
        UPDATE_RESERVEID(state, id ) {
            state.centreIdInReserve = id
        },
        SET_RESERVEID(state, id) {
            state.reserveId = id
        }

    }
}