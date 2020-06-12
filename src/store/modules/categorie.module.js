import CommandeService from '../../services/commande.service';

export const categorieStore = {
    namespaced: true,
    state: {
        categories: [],
        idCategorie: 0
    },

    getters: {
        getProdByCat: (state) => (id) => {
            id = state.idCategorie;
            if (id){
                return state.categories.find(categorie => categorie.id === id).produits
            }
        }
    },
   actions: {
        async getAllCategories({commit}){
            try{
                const newCategories = await CommandeService.getCategories();
                commit('set_categories', newCategories.data)
            } catch (e) {
                throw new Error(e.message)
            }
        },
       async addNew({dispatch}, categorie){
            try{
                await CommandeService.addCategorie(categorie);
                dispatch('getAllCategories')
            } catch (e) {
                throw new Error(e.message)
            }

       }

   },
    mutations: {
        set_categories(state, categories){
            state.categories = categories
        },
        new_categorie(state, categorie){
            state.categories.push(categorie)
        },
        UPDATE_CATID(state, id) {
            state.idCategorie = id
        }
    }
}