import Vue from 'vue'
import Vuex from 'vuex'
import {categorieStore} from "./modules/categorie.module";
import {auth} from './modules/auth.module';
import {produitStore} from "./modules/produit.module";
import {gestionnaireStore} from "./modules/gestionnaire.module";
import {budgetStore} from "./modules/budget.module";
import{centreStore} from "./modules/centre.module";
import {reserveStore} from "./modules/reservation.module";
import {transporteurStore} from './modules/transporteur.module';
import {clientStore} from "./modules/client.module";
import {fournisseurStore} from "./modules/fournisseur.module";
import {achatStore} from "./modules/Achat.module";
import {livraisonStore} from "./modules/livraison.module";
import {stockStore} from "./modules/stock.module";
import {receptionStore} from "./modules/reception.module";
import {venteStore} from "./modules/vente.module";
import {mouvementStore} from "./modules/mouvement.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categorieStore,
    produitStore,
    gestionnaireStore,
    budgetStore,
    centreStore,
    reserveStore,
    transporteurStore,
    clientStore,
    fournisseurStore,
    achatStore,
    livraisonStore,
    stockStore,
    receptionStore,
    venteStore,
    mouvementStore,
    auth
  }
})
