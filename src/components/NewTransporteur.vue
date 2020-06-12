<template>
    <div>
        <b-form @submit.prevent="AddTransporteur">
            <b-form-group label="Nom: " label-cols="4" label-cols-lg="2" label-for="nom">
                <b-form-input type="text" v-model="transporteur.nom"></b-form-input>
            </b-form-group>

            <b-form-group label="engin: " label-cols="4" label-cols-lg="2" label-for="engin">
                <b-form-input type="text" v-model="transporteur.engin"></b-form-input>
            </b-form-group>

            <b-form-group label="adresse: " label-cols="4" label-cols-lg="2" label-for="adresse">
                <b-form-input type="text" v-model="transporteur.adresse"></b-form-input>
            </b-form-group>

            <b-form-group label="phone: " label-cols="4" label-cols-lg="2" label-for="phone">
                <b-form-input type="text" v-model="transporteur.telephone"></b-form-input>
            </b-form-group>
            <button type="submit" class="btn btn-outline-info btn-sm">Ajouter</button>

        </b-form>

    </div>

</template>

<script>
    import Transporteur from '../models/transporteur.model'
    export default {
        name: 'NewTransporteur',
        data() {
            return {
                transporteur: new Transporteur('', '', '', '')
            }
        },
        methods: {
            AddTransporteur() {
                if (this.transporteur){
                    this.$store.dispatch('transporteurStore/addNewTransport', this.transporteur);
                    this.transporteur = {}
                }
            }
        }
    }

</script>

<style>

</style>
