<template>
    <div>
        <b-form @submit.prevent="addLivraison">
            <fieldset>
                <legend>Choix Achat</legend>
            <b-form-row>
                <b-col cols="2">Achat: </b-col>
                <b-col cols="2">
                    <b-form-select v-model="achatId" :options="achatsInLivraison" value-field="id" text-field="id"></b-form-select>
                </b-col>
            </b-form-row>
            </fieldset>

            <fieldset>
                <legend>Ajouter Nouvreau</legend>
                <b-form-row style="margin-bottom: 10px">
                    <b-col cols="2">Transporteur: </b-col>
                    <b-col cols="2">
                        <b-form-select v-model="transporteurId" :options="transportInLivraison" value-field="id" text-field="nomTransport"></b-form-select>
                    </b-col>
                </b-form-row>

                <b-form-row style="margin-bottom: 10px">
                    <b-col cols="2">Quantité: </b-col>
                    <b-col cols="4">
                        <b-input type="number" v-model="livraison.qteLivraison"></b-input>
                    </b-col>
                </b-form-row>

                <b-form-row>
                    <b-col cols="2">Date: </b-col>
                    <b-col cols="4">
                        <date-picker v-model="newDate" :config="dateOptions"></date-picker>
                    </b-col>
                </b-form-row>
            </fieldset>

            <button class="btn btn-outline-info btn-sm">Valider</button>
        </b-form>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Livraison from "../models/livraison.model";
    export default {
        name: 'NewLivraison',
        data () {
            return {
                newDate: new Date(),
                dateOptions: {
                    useCurrent: true,
                    showClear: true,
                    showClose: true,
                },
            livraison: new Livraison('', ''),
                transporteurId: 0,
                achatId: 0
            }
        },
        computed :{
            ...mapState({
                achatsInLivraison: state => state.achatStore.achats,
                transportInLivraison: state => state.transporteurStore.transporteurs,
                currentGest: state => state.auth.user
            })
        },
        methods: {
            addLivraison () {
                const body = {
                    transporteurId: this.transporteurId,
                    gestionnaireId: this.currentGest.id,
                    achatId: this.achatId,
                    qteLivraison: this.livraison.qteLivraison,
                    dateLivraison: this.newDate
                };
                this.$store.dispatch('livraisonStore/newLivraison', body);
                console.log(typeof (this.newDate))
                console.log(body)
                this.livraison = {};
                this.transporteurId = 0,
                    this.achatId = 0
            }
        }
    }

</script>

<style scoped lang="scss">
    fieldset {
        border: 0.5px solid black;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }

    legend {
        color: white;
        background-color: #17a2b8;
        width: 150px;
        font-size: 15px;

    }

</style>