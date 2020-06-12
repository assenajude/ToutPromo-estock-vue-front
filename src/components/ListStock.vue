<template>
    <div>
        <table class="table table-hover table-striped table-sm" v-if="stocks.length > 0">
            <thead>
            <tr>
                <th>Id</th>
                <th>Libellé</th>
                <th>Entrée</th>
                <th>Sortie</th>
                <th>Prix de vente</th>
                <th>Dernière Modif</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stock, s) in stocks" :key="s">
                <td>{{stock.id}}</td>
                <td>{{stock.libelle}}</td>
                <td>{{stock.qteEntree}}</td>
                <td>{{stock.qteSortie}}</td>
                <td>{{stock.prixVente}}</td>
                <td>{{stock.updatedAt | moment('DD/MM/YYYY H:mm:ss')}}</td>
            </tr>
            </tbody>
        </table>
        <span v-else>Vous n'avez pas encore fait de stock...</span>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'ListStock',
        data () {
            return {

            }
        },

        computed: {
            ...mapState({
                stocks: state => state.stockStore.stocks
            })

        },
        methods: {
        },
        created() {
        }
    }

</script>

<style>

</style>