<template>
    <div>
        <b-form @submit.prevent="addGestionnaire">
            <b-form-group label-for="matricule" label="Matricule :" label-cols="4" label-cols-lg="2" style="text-align: left">
                <b-form-input size="sm" class="mt-3" v-model="gestionnaire.matricule"></b-form-input>
            </b-form-group>
            <b-form-group label-for="Nom" label="Nom & Prenoms :" label-cols="4" label-cols-lg="2" style="text-align: left">
                <b-form-input size="sm" class="mt-3" v-model="gestionnaire.nomGest"></b-form-input>
            </b-form-group>
            <b-form-group label-for="mail" label="Adresse mail :" label-cols="4" label-cols-lg="2" style="text-align: left">
                <b-form-input size="sm" class="mt-3" v-model="gestionnaire.mailGest"></b-form-input>
            </b-form-group>
            <b-form-group label-for="contact" label="Contact :" label-cols="4" label-cols-lg="2" style="text-align: left">
                <b-form-input size="sm" class="mt-3" v-model="gestionnaire.contactGest"></b-form-input>
            </b-form-group>
            <button type="submit" class="btn btn-outline-info btn-sm">Ajouter</button>
        </b-form>
    </div>
</template>

<script>
    import {Gestionnaire} from "../models/gestionnaire.model";

    export default {
        name: 'NewGestionnaire',
        data(){
            return {
                gestionnaire: new Gestionnaire('', '', '', '')
            }
        },
        methods: {
            addGestionnaire(){
                this.$store.dispatch('gestionnaireStore/addGest', this.gestionnaire);
                this.gestionnaire = {}
            }
        }
    }
</script>

<style scoped lang="scss">

</style>