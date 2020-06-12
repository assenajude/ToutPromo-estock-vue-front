<template>
    <div>
        <b-table :items="ligneVentes" :fields="fields" head-variant="info" small hover>

        </b-table>
    </div>

</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: 'ListVente',
        data () {
            return {
                fields: [
                    {
                        key: 'dateLigneVente',
                        label: 'Date',
                        formatter: (value) => {
                          return  this.$moment(value).format('DD/MM/YYYY H:mm:ss')
                        }
                    },
                    {
                        key: 'stockId',
                        label: 'Produit',
                        formatter: (value) => {
                            return this.libelleStockOfVente(value).libelle
                        }
                    },
                    {
                        key: 'qteLigneVente',
                        label: 'Quantité vendue'
                    },
                    {
                        key:'prixVente',
                        label: 'Prix Unitaire'
                    },
                    {
                        key:'venteId',
                        label: 'Client',
                        formatter: (value) => {
                            return this.clientByVente(value).nomClient
                        }
                    }
                ]
            }
        },
        computed: {
            ...mapState({
                venteLocalList: state => state.venteStore.ventes,
                ligneVentes: state => state.venteStore.ligneVentes
            }),
            ...mapGetters({
                libelleStockOfVente: 'stockStore/getStockById',
                venteById: 'venteStore/getVenteById',
                clientByVente: 'venteStore/getClientByVente'
            })
        }
    }

</script>

<style>

</style>