<template>
    <div>
        <table class="table table-borderless table-hover table-sm" v-if="localReserves.length > 0">
            <thead>
                <tr>
                    <th>Description</th>
                    <th> Quantité Reservée</th>
                    <th> Quantité achetée</th>
                    <th> Reste reserve</th>
                    <th>Date debut</th>
                    <th>Date fin</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="reserve in localReserves" :key="reserve.id">
                <td>{{reserve.budget.descripBudget}}</td>
                <td>{{reserve.qteReserve}}</td>
                <td>{{reserve.qteConsoReserve}}</td>
                <td>{{reserve.qteReserve - reserve.qteConsoReserve}}</td>
                <td>{{reserve.dateDebut | moment("DD / MM / YYYY H:mm:ss")}}</td>
                <td>{{reserve.dateFin | moment("DD / MM / YYYY H:mm:ss")}}</td>
            </tr>
            </tbody>

        </table>
        <p v-else>Vous n'avez pas encore fait de reservations veillez en ajouter...</p>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListReserve',
        computed: {
            ...mapState({
                localReserves: state => state.reserveStore.reserves
            })
        },

        methods: {
            ...mapActions({
                getReserves: 'reserveStore/getReserves'
            })
        },
        created() {
            this.getReserves()
        }
    }

</script>

<style scoped lang="scss">
    table thead{
        background-color: #17a2b8;
        color: white;
    }

</style>