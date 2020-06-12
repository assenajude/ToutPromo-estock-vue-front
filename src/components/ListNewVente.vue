<template>
    <div>
        <b-form>
            <b-card>
                <b-card-header class="cardHeader" style="height: 40px; width: 200px; color: white; background-color: #ff9f9b">Panier de vente</b-card-header>
                <b-card-body>
                    <table class="table table-sm table-hover table-striped" v-if="produitsInList.length > 0">
                        <thead>
                        <tr>
                            <th>Produit</th>
                            <th>Quantité</th>
                            <th>prix de vente</th>
                            <th>Montant HT</th>
                            <th>TVA</th>
                            <th>Montant TTC</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(liste, l) in produitsInList" :key="l">
                            <td>{{liste.libelle}}</td>
                            <td>{{liste.quantite}}</td>
                            <td>{{liste.prixVente}}</td>
                            <td>{{liste.prixVente * liste.quantite}}</td>
                            <td>{{liste.prixVente * liste.quantite * 18 /100}}</td>
                            <td>{{(liste.prixVente * liste.quantite) + (liste.prixVente * liste.quantite * 18 /100)}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <b-card-text v-else>Votre panier est vide...</b-card-text>
                </b-card-body>
            </b-card>
            <slot name="saveVenteBtn"></slot>
        </b-form>
    </div>

</template>

<script>
    export default {
        name: 'NewVente',
        data() {
            return {
                quantite: 0,
                libelleProd: ''
            }
        },
        props: ['produitsInList'],
        computed: {},
        methods: {
/*            addLigneVente() {
                const newLibelle = this.libelleProd.trim();
                const newQuantite = parseInt(this.quantite);
                this.$store.commit('stockStore/SET_LEBELLE', newLibelle)
                const prod = this.stockByLibelle(newLibelle);
                this.$store.dispatch('venteStore/addProductToList', {
                    id: prod.id,
                    prodQte: prod.qteEntree,
                    libelle: prod.libelle,
                    qteVente: newQuantite,
                    prixVente: prod.prixVente
                });
            },
            changeIdClient(event) {
                if(event.target.value) {
                    const newId = parseInt(event.target.value);
                    this.$store.commit('clientStore/SET_ID', newId)
                }
            },*/
        }
    }
</script>

<style lang="scss" scoped>

    fieldset {
        border: 1px solid black;
        padding-right: 200px;
        margin-bottom: 20px;
    }
    legend {
        width: 200px;
        color: white;
        background-color: #17a2b8;
        font-size: 15px;
    }

    .infoProduit {
        display: flex;
        margin-bottom: 40px;
    }

    label, input, button {
        margin-left: 50px;
    }

</style>