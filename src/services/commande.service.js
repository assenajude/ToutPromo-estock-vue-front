import http from './http-common';

class CommandeService {
    addCentre(centre){
        return http.post('/centres', centre)
    }

    getCentres(){
        return http.get('/centres')
    }

   getCategories(){
    return http.get('/categories')
   }

    addCategorie(categorie){
       return http.post('/categories',categorie);
    }

    getAllProduits(){
       return http.get('/produits')
    }

    newProduit(produit){
       return http.post('/produits', produit)
    }

    getAllGestionnaires(){
       return http.get('/gestionnaires')
    }

    newGest(gestionnaire){
       return http.post('/gestionnaires', gestionnaire)
    }

    getBudgets(){
       return http.get('/budgets')
    }

    addBudget(budget){
       return http.post('/budgets', budget)
    }


   getAllReservations(){
       return http.get('/reservations')
   }

   addReserve(reserve){
       return http.post('/reservations', reserve)
   }

   addTransporteur(transporteur) {
        return http.post('/transporteurs', transporteur)
   }

    getTransporteurs() {
        return http.get('/transporteurs')
    }

    getAllClient () {
        return http.get('/clients')
    }

    createClient(client) {
        return http.post('/clients', client)
    }

    addfourn(fournisseur) {
        return http.post('/fournisseurs', fournisseur)
    }

    getAllFourn () {
        return http.get('/fournisseurs')
    }

    getAllAchats() {
        return http.get('/achats')
    }

    addAchat (achat) {
        return http.post('/achats', achat)
    }

    getLivraisons() {
        return http.get('/livraisons')
    }

    addLivraison (livraison) {
        return http.post('/livraisons', livraison)
    }

    getStocks() {
        return http.get('/entrees')
    }

    createStock(stock) {
        return http.post('/entrees', stock)
    }

    newReception(reception) {
        http.post('/entrees/reception', reception)
    }

    getAllReceptions() {
        http.get('/entrees/reception')
    }

    createVente(vente) {
        http.post('/ventes/sortie', vente)
    }

    getStockByLib(libelle) {
        http.get('/entrees/getBylibelle', libelle)
    }

    getAllMouvement() {
        return http.get('/mouvements')
    }

    getAllVentes() {
       return  http.get('/ventes')
    }

    getLigneventes () {
        return http.get('/ventes/all/lignes')
    }

}

export default new CommandeService();
