import CommandeService from '../../services/commande.service'

export const venteStore = {
    namespaced: true,
    state: {
        ventes: [],
        ligneVentes: [],
        items: [],

    },
    getters: {
        getVenteById : (state) => (id) => {
            return state.ventes.find(vente => vente.id === id)
        },
        getClientByVente : (state, getters, rootState) => (id)=> {
               const clientId = getters.getVenteById(id).clientId;
               return rootState.clientStore.clients.find(client => client.id === clientId)
        }

    },

    actions: {
        addProductToList({state, commit}, product) {
            if(product.prodQte > 0) {
                const listItem = state.items.find(item => item.id === product.id);
                if (!listItem) {
                    commit('PUSH_PROD_TO_LIST', product)
                } else {
                    commit('INCREMENT_QTEPROD', product)
                }
                commit('stockStore/DECREMENT_STOCK_QTE', product, {root: true})
            }
        },
        async addNewVente(context, vente) {
            try {
                 await CommandeService.createVente(vente);
            } catch (e) {
                throw new Error(e.message)
            }
        },
           async getVentes({commit}) {
            try {
                const localVentes = await CommandeService.getAllVentes();
                    commit('SET_VENTES', localVentes.data)

            } catch (e) {
                throw new Error(e.message)
            }
        },
        async getLigneVentes({commit}) {
            try {
                const localLigneVentes = await CommandeService.getLigneventes();
                commit('SET_LIGNEVENTES', localLigneVentes.data)

            } catch (e) {
                throw new Error(e.message)
            }
        }

    },
    mutations: {
        PUSH_PROD_TO_LIST(state, produit) {
            state.items.push({
                id: produit.id,
                libelle: produit.libelle,
                prixVente: produit.prixVente,
                quantite: produit.qteVente
            })
        },
        INCREMENT_QTEPROD(state, produit) {
            const newProd = state.items.find(prod => prod.id === produit.id);
            newProd.quantite += produit.qteVente;
        },
        RESET_ITEMS(state) {
            state.items = []
        },
        SET_VENTES(state, ventes) {
            state.ventes = ventes
        },
        SET_LIGNEVENTES(state, lignes) {
            state.ligneVentes = lignes
        }

    }


}