<template>
    <div>
        <table class="table table-sm table-striped table-hover">
            <thead>
            <tr>
                <th>Date</th>
                <th>Produit</th>
                <th>Id Achat</th>
                <th>Qte emise</th>
                <th>Qte reçue</th>
                <th>Transporteur</th>
            </tr>
            </thead>

            <tbody >
            <tr v-for="(livraison, l) in livraisons" :key="l">
                <td>{{livraison.createdAt | moment("DD/MM/YYYY H:mm:ss")}}</td>
                <td>{{livraison.achat.reservation.budget.produit.designProd}}</td>
                <td>{{livraison.achat.id}}</td>
                <td>{{livraison.achat.qteAchat}}</td>
                <td>{{livraison.qteLivraison}}</td>
                <td v-if="transporteur(livraison.transporteurId)">{{transporteur(livraison.transporteurId).nomTransport}}</td>
            </tr>
            </tbody>
        </table>

    </div>

</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    export default {
        name: 'ListLivraison',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                livraisons: state => state.livraisonStore.livraisons
            }),
            ...mapGetters({
                transporteur: 'transporteurStore/getTransportBy'
            })
        },
        methods: {
            ...mapActions({
                getLivraisons: 'livraisonStore/getAllLivraisons'
            })
        },
        created() {
            this.getLivraisons()
        }
    }

</script>


<style>

</style>