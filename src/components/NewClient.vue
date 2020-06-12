<template>
    <div>
        <b-form @submit.prevent="addClient">
            <b-form-group label-for="nom" label="Nom: " label-cols-lg="2" label-cols-sm="4">
                <b-form-input type="text" v-model="client.nomClient"></b-form-input>
            </b-form-group>
            <b-form-group label-for="contact" label="Contact: " label-cols-lg="2" label-cols-sm="4">
                <b-form-input type="text" v-model="client.contactClient"></b-form-input>
            </b-form-group>
            <b-form-group label-for="adresse" label="Adresse: " label-cols-lg="2" label-cols-sm="4">
                <b-form-input type="text" v-model="client.adresseClient"></b-form-input>
            </b-form-group>
        <button type="submit" class="btn btn-sm btn-outline-info">Ajouter</button>
        </b-form>
    </div>

</template>

<script>
    import Client from '../models/client.model'
    export default {
        name: 'NewClient',
        data() {
            return {
                client: new Client('', '', '')
            }
        },
        methods: {
            addClient() {
                this.$store.dispatch('clientStore/newClient', this.client);
                this.client = {}
            }

        }
    }

</script>

<style>

</style>