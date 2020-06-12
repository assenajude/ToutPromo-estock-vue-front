<template>
    <b-form @submit.prevent="addReserve">
        <fieldset>
            <legend>Choix du budget</legend>
        <b-form-group label-cols-lg="2" label-cols="4" label-for="centre" label="Centre: ">
            <b-select :value="idCentre" @input.native="getNewsbudgets" :options="centres" text-field="nomCentre" value-field="id"></b-select>
        </b-form-group>
        </fieldset>

        <fieldset>
            <legend>info Budget</legend>
        <b-form-group label-cols-lg="2" label-cols="4" label-for="budget" label="Budget: ">
            <b-form-select
                           :value="idBudget" v-if="allBudgetsCentre(idCentre)"
                           :options="allBudgetsCentre(idCentre)" value-field="id"
                           text-field="descripBudget" @input.native="changeBudget">
            </b-form-select>
            <b-form-input v-else value="Aucun budget dans ce centre...Veillez en ajouter"></b-form-input>
        </b-form-group>

        <b-form-group label-for="qteGlobale" label="Qté Globale: " label-cols="4" label-cols-lg="2">
            <b-form-input readonly type="number" v-if="budgetById(idBudget)" v-model="budgetById(idBudget).qteBudget"  class="sm" id="qteGlobale" style="border: 0"></b-form-input>
            <b-form-input type="number" v-else value="0"></b-form-input>
        </b-form-group>
            <b-form-group label-for="qteConco" label="Qté Consommée: " label-cols="4" label-cols-lg="2">
                <b-form-input  readonly type="number" v-if="budgetById(idBudget)" v-model="budgetById(idBudget).qteConsoBudget" class="sm" id="qteConso" style="color: red; border:0"></b-form-input>
                <b-form-input type="number" v-else value="0"></b-form-input>
            </b-form-group>
            <b-form-group label-for="qteRest" label="Qté Restante: " label-cols="4" label-cols-lg="2">
                <b-form-input  readonly type="number" v-if="budgetById(idBudget)" v-model="qteRestante"
                               class="sm" id="qteRest" style="border: 0; color: green"></b-form-input>
                <b-form-input type="number" v-else value="0"></b-form-input>
            </b-form-group>
        <b-form-group label-for="Cout" label="Coût Unitaire: " label-cols="4" label-cols-lg="2">
            <b-form-input type="number" v-if="budgetById(idBudget)" class="sm" v-model="budgetById(idBudget).coutUnitaire" readonly style="border: 0"></b-form-input>
            <b-form-input type="number" v-else value="0"></b-form-input>
        </b-form-group>
        <b-form-group label-for="global" label="Coût global: "  label-cols="4" label-cols-lg="2">
            <b-form-input type="number" class="sm" readonly style="border: 0" v-model="coutGlobal"></b-form-input>
        </b-form-group>
        <b-form-group label-for="debut" label="Date Debut: " label-cols="4" label-cols-lg="2">
            <b-form-input  class="sm" v-if="budgetById(idBudget)" id="debut" v-model="getDateDebut" readonly style="border: 0"> </b-form-input>
            <b-form-input   class="sm" v-else  value="Indeterminée..." readonly style="border: 0"></b-form-input>
        </b-form-group>

        <b-form-group label-for="fin" label="Date Fin: " label-cols="4" label-cols-lg="2">
            <b-form-input  class="sm" v-if="budgetById(idBudget)" id="fin" v-model="getDateFin" readonly style="border: 0"> </b-form-input>
            <b-form-input   class="sm" v-else  value="Indeterminée..." readonly style="border: 0"></b-form-input>
        </b-form-group>
        </fieldset>
            <fieldset>
                <legend>Ajouter nouvelle reservation</legend>
        <b-form-group label-for="qte" label="Quantité Reserve: " label-cols="4" label-cols-lg="2">
            <b-form-input type="number" v-model="reserve.qteReserve" class="sm"></b-form-input>
        </b-form-group>
        <b-form-group label-for="debutReserve" label="Date debut reserve: " label-cols="4" label-cols-lg="2">
            <b-form-input type="date" class="sm" v-model="reserve.dateDebut"></b-form-input>
        </b-form-group>
        <b-form-group label-for="finReserve" label="Date fin reserve: " label-cols="4" label-cols-lg="2">
            <b-form-input type="date" class="sm" v-model="reserve.dateFin"></b-form-input>
        </b-form-group>
        </fieldset>
        <button type="submit" class="btn btn-sm btn-outline-info">Ajouter</button>
    </b-form>

</template>

<script>
    import {Reservation} from '../models/reservation.model';
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'NewReserve',
        data (){
            return {
              reserve: new Reservation('', '', 0),
                selected: {},
                selectedBudget: '',
            }
        },
        computed: {
            ...mapState({
                budgets: state => state.budgetStore.budgets,
                centres: state => state.centreStore.centres,
                idCentre: state => state.budgetStore.centreId,
                idBudget: state => state.budgetStore.budgetId
            }),
            ...mapGetters({
                getCentreById: 'centreStore/centreById',
                allBudgetsCentre: 'budgetStore/findByBudgetsByCentreId',
                budgetById: 'budgetStore/budgetById'
            }),

            reserveGest() {
                return this.$store.state.auth.user;
            },

            getDateDebut(){
                if(this.budgetById(this.idBudget)){
                    let dateDebut = this.budgetById(this.idBudget).dateDebutBud;
                  return this.$moment(dateDebut).format('DD / MM / YYYY H:mm:ss')
                } else return 'Aucune date'
            },
            getDateFin(){
                if (this.budgetById(this.idBudget)){
                    let dateFin = this.budgetById(this.idBudget).dateFinBud;
                    return this.$moment(dateFin).format('DD / MM / YYYY H:mm:ss')
                }
                return 'Aucune date'
            },
            coutGlobal(){
                if (this.budgetById(this.idBudget)){
                    return this.budgetById(this.idBudget).qteBudget * this.budgetById(this.idBudget).coutUnitaire
                } else return 0
            },
            qteRestante(){
                if(this.budgetById(this.idBudget)) {
                    return this.budgetById(this.idBudget).qteBudget - this.budgetById(this.idBudget).qteConsoBudget
                } else return 0;
            }

        },
        methods: {
            addReserve(){
                let body = {
                    budgetId: this.idBudget,
                    dateDebut: this.reserve.dateDebut,
                    dateFin: this.reserve.dateFin,
                    qteReserve: this.reserve.qteReserve,
                    userId: this.reserveGest.id
                }
                this.$store.dispatch('reserveStore/newReserve', body);
                this.reserve = {}
            },
            getNewsbudgets(e){
                if (e.target.value) {
                    let id = parseInt(e.target.value);
                    this.$store.commit('budgetStore/UPDATE_CENTREID', id)
                    console.log(id);
                    console.log(this.allBudgetsCentre(id))

                }
            },
            changeBudget(event){
                if (event.target.value) {
                    let idBud = parseInt(event.target.value);
                    this.$store.commit('budgetStore/UPDATE_BUDGETID', idBud);
                    console.log(idBud);
                    console.log(this.budgetById(idBud))

                }
            }
        },
        created() {
            this.unwatch = this.$store.watch(
                () => {
                    return this.$store.state.centreStore.idCentre
                },
                (newValue, oldValue) => {
                    console.log(`Updating from ${oldValue} to ${newValue}`);
                }
                )
        },

        beforeDestroy() {
            this.unwatch()
        }
    }

</script>

<style lang="scss" scoped>
    #budgetContent b-form-input{
        border: 0
    }
    fieldset{
        border: 1px solid black;
        padding: 10px;
        margin-bottom: 15px;
    }

    legend{
        width: 150px;
        font-size: 15px;
        color: white;
        background-color: #17a2b8;
        text-decoration: underline;
        font-weight: bold;
    }

</style>