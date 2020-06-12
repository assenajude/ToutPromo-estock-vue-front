<template>
    <div>
        <table class="table table-striped table-sm table-hover">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Contact</th>
                <th>Adresse</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(client, l) in localClients" :key="l">
                <td>{{client.nomClient}}</td>
                <td>{{client.contactClient}}</td>
                <td>{{client.adresseClient}}</td>

            </tr>

            </tbody>

        </table>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListClient',
        data() {
            return {

            }
        },

        computed: {
            ...mapState({
                localClients: state => state.clientStore.clients
            })
        },
        methods: {
            ...mapActions({
                getClients: 'clientStore/getAllClients'
            })
        },

        created() {
            this.getClients()
        }
    }

</script>

<style></style>
