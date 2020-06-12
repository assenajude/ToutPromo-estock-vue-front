<template>
    <div>
        <table class="table table-striped table-hover table-sm" v-if="localAchats.length > 0">
            <thead>
            <tr>
                <td>Date</td>
                <td>Produit</td>
                <td>Budget</td>
                <td>Id Reservation</td>
                <td>Quantité</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(achat, c) in localAchats" :key="c">
                <td>{{achat.createdAt}}</td>
                <td>{{achat.reservation.budget.produit.designProd}}</td>
                <td>{{achat.reservation.budget.descripBudget}}</td>
                <td>{{achat.reservation.id}}</td>
                <td>{{achat.qteAchat}}</td>
            </tr>
            </tbody>
        </table>
        <span v-else>Vous n'avez pas encore fait des achats</span>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListAchat',
        data () {
            return {

            }
        },
        computed :{
            ...mapState({
                localAchats: state => state.achatStore.achats
            }),
            coutReserve() {
                let cout = 0;
                this.localAchats.forEach(achat => {
                   cout =  achat.reservation.budget.coutUnitaire * achat.reservation.qteReserve
                });
                return cout
            }

        },
        methods: {
           ...mapActions({
               getAchats: 'achatStore/getAchats'
           })
        },
        created() {
            this.getAchats()
        }

    }

</script>

<style>

</style>