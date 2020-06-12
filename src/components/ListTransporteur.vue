<template>
    <div>
        <table class="table table-sm table-hover table-striped" v-if="localTransporteurs.length > 0">
            <thead>
            <tr>
            <th>Nom</th>
            <th>Engin</th>
            <th>Adresse</th>
            <th>Telephone</th>
            </tr>
            </thead>

            <tbody >
            <tr v-for="(transport, t) in localTransporteurs" :key="t">
                <td>{{transport.nomTransport}}</td>
                <td>{{transport.engin}}</td>
                <td>{{transport.adTransport}}</td>
                <td>{{transport.telTransport}}</td>


            </tr>

            </tbody>

        </table>
        <span v-else>Il n'y a pas de transporteur encore enregistré</span>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListTransporteur',
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                localTransporteurs: state => state.transporteurStore.transporteurs
            })
        },
        methods: {
            ...mapActions({
                getLocalTransports: 'transporteurStore/getAllTransport'
            })
        },
        created() {
            this.getLocalTransports()
        }
    }
</script>

<style>

</style>