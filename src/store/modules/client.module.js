import CommandeService from '../../services/commande.service'

export const clientStore = {
    namespaced: true,
    state: {
        clients: [],
        clientId: 0

    },
    getters: {
        getClientById: (state)=>(id) => {
            return state.clients.find(client => client.id === id)
}

    },
    actions: {
        async getAllClients({commit}) {
            try{
                const allClients = await CommandeService.getAllClient();
                commit('SET_CLIENT', allClients.data)
            } catch (e) {
                throw new Error(e.message)
            }
        },
        async newClient({dispatch}, client) {
            try{
                await CommandeService.createClient(client);
                dispatch('getAllClients')
            } catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_CLIENT(state, payload) {
            state.clients = payload
        },
        SET_ID(state, id) {
            state.clientId = id
        }
    }

}