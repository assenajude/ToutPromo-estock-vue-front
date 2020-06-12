<template>
    <div>
        <b-spinner variant="info" label="spinning" v-show="loading"></b-spinner>
                <img src="../assets/barre-info-fichier.png">

                <div class="row">
                    <b-card no-body style="margin: 20px">
                        <div id="mainCardTab">

                            <b-tabs card >
                                <b-tab title="Centre">
                                    <strong style="background-color: #860432; color: white; padding: 10px">Fiche Centre</strong>
                                    <b-card-text>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListCentre/></b-tab>
                                            <b-tab title="Nouveau"><NewCentre/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Categorie">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Categorie</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListCategorie /></b-tab>
                                            <b-tab title="Nouveau"><NewCategorie/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Produit">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Produit</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListProduit/></b-tab>
                                            <b-tab title="Nouveau"><NewProduit/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Budget">
                                    <strong style="background-color: #860432; color: white; padding: 10px">Fiche Budget</strong>
                                    <b-card-text>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListBudget/></b-tab>
                                            <b-tab title="Nouveau"><NewBudget/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Reservation">
                                    <strong style="background-color: #860432; color: white; padding: 10px">Fiche Reservation</strong>
                                    <b-card-text>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><listReserve/></b-tab>
                                            <b-tab title="Nouveau"><NewReserve/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Achat">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Achat</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListAchat/></b-tab>
                                            <b-tab title="Nouveau"><NewAchat/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Livraison">
                                    <strong style="background-color: #860432; color: white; padding: 10px">Fiche Livraison</strong>
                                    <b-card-text>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListLivraison/></b-tab>
                                            <b-tab title="Nouveau"><NewLivraison/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Reception">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Reception</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListReception/></b-tab>
                                            <b-tab title="Nouveau"><NewReception/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Stock">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Stock</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListStock/></b-tab>
                                            <b-tab title="Nouveau"><NewStock/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="vente">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Vente</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListVente/></b-tab>
                                            <b-tab title="Nouveau"><NewVente/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Facturation">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Facturation</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListFacture/></b-tab>
                                            <b-tab title="Nouveau"><NewFacture/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Gestionnaire">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Gestionnaire</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"> <ListGestionnaire/></b-tab>
                                            <b-tab title="Nouveau"><NewGestionnaire/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Fournisseur">
                                    <strong style="background-color: #860432; color: white; padding: 10px">Fiche Fournisseur</strong>
                                    <b-card-text>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListFournisseur/></b-tab>
                                            <b-tab title="Nouveau"><NewFournisseur/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Client">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Client</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"> <ListClient/></b-tab>
                                            <b-tab title="Nouveau"><NewClient/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Transporteur">
                                    <b-card-text>
                                        <strong style="background-color: #860432; color: white; padding: 10px">Fiche Transporteur</strong>
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="Liste"><ListTransporteur/></b-tab>
                                            <b-tab title="Nouveau"><NewTransporteur/></b-tab>
                                        </b-tabs>
                                    </b-card-text>
                                </b-tab>

                            </b-tabs>
                        </div>
                    </b-card>
                </div>
    </div>

</template>

<script>
    import ListCategorie from '../components/ListCategorie.vue';
    import NewCategorie from "../components/NewCategorie";
    import ListProduit from "../components/ListProduit";
    import NewProduit from '../components/NewProduit';
    import NewBudget from '../components/NewBudget';
    import ListBudget from '../components/ListBudget';
    import ListGestionnaire from "../components/ListGestionnaire";
    import NewGestionnaire from '../components/NewGestionnaire'
    import ListCentre from "../components/ListCentre";
    import NewCentre from "../components/NewCentre";
    import ListReserve from "../components/ListReserve";
    import NewReserve from "../components/NewReserve";
    import NewTransporteur from "../components/NewTransporteur";
    import ListTransporteur from "../components/ListTransporteur";
    import NewClient from "../components/NewClient";
    import ListClient from '../components/ListClient';
    import NewFournisseur from "../components/NewFournisseur";
    import ListFournisseur from "../components/ListFournisseur";
    import NewAchat from "../components/NewAchat";
    import ListAchat from "../components/ListAchat"
    import ListLivraison from "../components/ListLivraison";
    import NewLivraison from "../components/NewLivraison";
    import NewStock from "../components/NewStock";
    import ListStock from '../components/ListStock';
    import NewReception from '../components/NewReception';
    import ListReception from '../components/ListReception';
    import ListVente from "../components/ListVente";
    import NewVente from "../components/NewVente";
    import NewFacture from '../components/NewFacture';
    import ListFacture from '../components/ListFacture';

    export default {
        name: 'Fichier',
        data() {
            return {
                loading: false
            }
        },
        components: {
            NewVente,
            ListVente,
            NewStock,
            ListStock,
            NewLivraison,
            ListLivraison,
            ListCentre,
            ListCategorie,
            NewCategorie,
            ListProduit,
            NewProduit,
            NewBudget,
            ListBudget,
            ListGestionnaire,
            NewGestionnaire,
            NewCentre,
            ListReserve,
            NewReserve,
            NewTransporteur,
            ListTransporteur,
            NewClient,
            ListClient,
            NewFournisseur,
            ListFournisseur,
            NewAchat,
            ListAchat,
            NewReception,
            ListReception,
            NewFacture,
            ListFacture

        },
        beforeMount() {
            this.loading = true
        },
        mounted() {
            this.loading = false
        }


    }
</script>

<style scoped>
    #mainCard{
        border: 0px;
    }
    .mainTitle{
        color: #860432;
    }
    .col-6{
        margin-top: 50px
    }

    #mainCardTab{
        overflow-x: auto;
    }

</style>