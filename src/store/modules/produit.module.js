import CommandeService from '../../services/commande.service'

export const produitStore = {
    namespaced: true,
    state: {
        produits: []
    },
    actions: {
        async getAllProduits({commit}){
            try{
               const allProduits = await CommandeService.getAllProduits();
               commit('set_produits', allProduits.data)

            }catch (e) {
                throw new Error(e.message)
            }
        },
        async addProduit({commit}, produit){
            try{
                await CommandeService.newProduit(produit);
                commit('add_Produit', produit)
            } catch (e) {
                throw new Error(e.message)
            }
        }

    },
    mutations: {
        set_produits(state, produits){
            state.produits = produits
        },
        add_Produit(state, produit){
            state.produits.push(produit)
        }

    }

}