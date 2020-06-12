import CommandeService from '../../services/commande.service';

export const stockStore = {
    namespaced: true,
    state: {
        stocks: [],
        newValue: '',
        stocksByLibelle: []

    },
    getters: {
        getFilteredStock:  (state) => {
            return state.stocks.filter(stock => {
                return stock.libelle.toLowerCase().match(state.newValue.toLowerCase())
            })
        },

        getStockById: (state) => (idStock) => {
            return state.stocks.find(stock => stock.id === idStock)
        },
        getStockBylibelle: (state) => (libelle) => {
         return state.stocks.find(stock => stock.libelle === libelle)
       }

    },
    actions: {
        async getAllStocks({commit}) {
            try{
                const stocks = await CommandeService.getStocks();
                commit('SET_STOCKS', stocks.data)

            }catch (e) {
                throw new Error(e.message)
            }
        },
        async newStock({dispatch}, stock) {
            try{
                await CommandeService.createStock(stock);
                dispatch('getAllStocks')

            }catch (e) {
                throw new Error(e.message)
            }
        }
    },
    mutations: {
        SET_STOCKS(state, payload) {
            state.stocks = payload
        },
        SET_LEBELLE(state, lib) {
            state.libelle = lib
        },
        DECREMENT_STOCK_QTE(state, produit) {
            const stock = state.stocks.find(stock => stock.id === produit.id);
            stock.qteEntree -= produit.qteVente
        },
        SET_NEWVALUE (state, val)  {
            state.newValue = val

        }

    }
}
