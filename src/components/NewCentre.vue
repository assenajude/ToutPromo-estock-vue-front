<template>
    <div>
        <b-form @submit.prevent="addCentre">
            <b-form-group label-cols-lg="2" label-cols="4" label="Nom Centre" label-for="nom">
                <b-form-input v-model="centre.nomCentre" class="sm" id="nom"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-lg="2" label-cols="4" label="Localité Centre" label-for="local">
                <b-form-input v-model="centre.localCentre" class="sm" id="local"></b-form-input>
            </b-form-group>
            <b-form-group label-cols-lg="2" label-cols="4" label="Adresse Centre" label-for="adresse">
                <b-form-input v-model="centre.adresseCentre" class="sm" id="adresse"></b-form-input>
            </b-form-group>
            <button class="btn btn-outline-info btn-sm" type="submit">Ajouter</button>
        </b-form>
    </div>

</template>

<script>
    import {Centre} from '../models/centre.model';

    export default {
        name: 'NewCentre',
        data() {
            return {
                centre: new Centre('', '', '')
            }
        },
        methods: {
            addCentre(){
                this.$store.dispatch('centreStore/addNew', this.centre);
                this.centre = {}
            }
        }
    }

</script>

<style scoped lang="scss">

</style>