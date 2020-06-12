<template>
    <div>
        <b-form @submit.prevent="addFournisseur">
            <b-form-group label-cols-sm="4" label-cols="2" label="Nom: " label-for="nom">
                <b-form-input type="text" v-model="fournisseur.nomFourn"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-sm="4" label-cols="2" label="Adresse: " label-for="adresse">
                <b-form-input type="text" v-model="fournisseur.adresseFourn"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-sm="4" label-cols="2" label="Numero: " label-for="numero">
                <b-form-input type="text" v-model="fournisseur.numFourn"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-sm="4" label-cols="2" label="Domaine: " label-for="domaine">
                <b-form-input type="text" v-model="fournisseur.domaineFourn"></b-form-input>
            </b-form-group>
            <button type="submit" class="btn btn-sm btn-outline-info">Ajouter</button>
        </b-form>
    </div>

</template>

<script>
    import Fournisseur from "../models/fournisseur.model";

    export default {
        name: 'NewFournisseur',
        data() {
            return {
                fournisseur: new Fournisseur('', '', '', '')
            }
        },
        methods: {
            addFournisseur() {
                this.$store.dispatch('fournisseurStore/newFourn', this.fournisseur);
                this.fournisseur = {}
            }
        }
    }

</script>

<style>

</style>