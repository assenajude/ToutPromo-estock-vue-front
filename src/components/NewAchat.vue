<template>
    <div>
        <b-form @submit.prevent="addAchat">

            <b-form-group label-for="gest" label="Gestionnaire: " label-cols-sm="4" label-cols-lg="2">
                <b-form-input type="text" :value="currentGest.username" readonly></b-form-input>
            </b-form-group>
            <b-form-group label-for="centre" label="Centre: " label-cols-sm="4" label-cols-lg="2">
                <b-form-select :value="idCentre" :options="localCentres" @input.native="changeReserve" value-field="id" text-field="nomCentre"></b-form-select>
            </b-form-group>

            <fieldset>
                <legend>Infos reservation</legend>
            <b-form-group label-for="reserve" label="Reservation: " label-cols-sm="4" label-cols-lg="2">
                <b-form-select v-if="centreById(idCentre)"
                               v-model="selectedId"
                               :options="getReservesByCentre(idCentre)"
                               value-field="id"
                               text-field="budget.produit.descripProd"></b-form-select>
            </b-form-group>

                <b-form-group label-for="QteReserve" label="Quantité reserve: " label-cols-sm="4" label-cols-lg="2">
                    <b-form-input v-if="getReservation(selectedId)" type="number" :value="getReservation(selectedId).qteReserve"  readonly></b-form-input>
                    <b-form-input v-else type="number" value="0" readonly></b-form-input>
                </b-form-group>

                <b-form-group label-for="consoReserve" label="Quantité consommée: " label-cols-sm="4" label-cols-lg="2">
                    <b-form-input v-if="getReservation(selectedId)" type="number" :value="getReservation(selectedId).qteConsoReserve" readonly></b-form-input>
                    <b-form-input v-else type="number" value="0" readonly></b-form-input>
                </b-form-group>
                <b-form-group label-for="qteReste" label="Quantité Restante: " label-cols-sm="4" label-cols-lg="2">
                    <b-form-input type="number" v-if="getReservation(selectedId)" :value="getResteReserve" readonly></b-form-input>
                    <b-form-input v-else type="number" value="0" readonly></b-form-input>
                </b-form-group>
            </fieldset>



            <fieldset>
                <legend>Ajouter Nouveau</legend>
                <b-form-group label-for="fourn" label="Fournisseur: " label-cols-sm="4" label-cols-lg="2">
                    <b-form-select v-model="fournisseurId" :options="localFournisseurs" text-field="nomFourn" value-field="id"></b-form-select>
                </b-form-group>

                <b-form-group label-for="qteAchat" label="Quantité: " label-cols-sm="4" label-cols-lg="2">
                <b-form-input type="number" v-model="achat.qteAchat"></b-form-input>
            </b-form-group>


            <b-form-group label-for="puAchat" label="Prix unitaire: " label-cols-sm="4" label-cols-lg="2">
                <b-form-input type="number" v-model="achat.puAchat"></b-form-input>
            </b-form-group>


            <b-form-group label-for="date" label="Date: " label-cols-sm="4" label-cols-lg="2">
                <b-form-input type="date"></b-form-input>
            </b-form-group>
            </fieldset>
            <button class="btn btn-sm btn-outline-info" type="submit">Ajouter</button>
        </b-form>
    </div>
</template>
<script>
    import {mapGetters, mapState} from 'vuex'
    import Achat from "../models/achat.model";
    export default {
        name: 'NewAchat',
        data () {
            return {
                selectedId:0,
                achat: new Achat(0.00, new Date(), ''),
                fournisseurId: 0,

            }

        },
        computed: {
            ...mapState({
               idCentre: state => state.reserveStore.centreIdInReserve,
                localCentres: state => state.centreStore.centres,
                localFournisseurs: state => state.fournisseurStore.fournisseurs,
                currentGest: state => state.auth.user
            }),
            ...mapGetters({
                centreById: 'centreStore/centreById',
                getReservesByCentre: 'reserveStore/findReserveByCentreId',
                getReservation: 'reserveStore/getReserveById'
            }),
            getResteReserve () {
                return this.getReservation(this.selectedId).qteReserve - this.getReservation(this.selectedId).qteConsoReserve
            },
            currentDate() {
                let currentDate = null;

                return currentDate ;
            }

        },
        methods: {
            changeReserve(event) {
                if (event) {
                    let id = parseInt(event.target.value);
                    this.$store.commit('reserveStore/UPDATE_RESERVEID', id);
                    console.log(this.idCentre)
                    console.log(this.getReservesByCentre(this.idCentre))

                }
            },
            addAchat() {
                let body = {
                    reservationId: this.selectedId,
                    gestionnaireId: this.currentGest.id,
                    fournisseurId: this.fournisseurId,
                    qteAchat: this.achat.qteAchat,
                    puAchat: this.achat.puAchat,
                    dateAchat: this.currentDate
                };
                 this.$store.dispatch('achatStore/newAchat', body);
                console.log(body)
                this.achat = {};
                this.fournisseurId = 0
            }
        }
    }

</script>

<style scoped lang="scss">
    fieldset {
        border: 0.1px solid black
    }

    legend {
        width: 200px;
        font-size: 15px;
        font-weight: bold;
        background-color: #17a2b8;
        color: white;
    }

</style>