<template>

    <div>
        <b-row>
            <b-col cols="2" style="margin-top: 10px">
                <p><strong>Trier par centre:</strong></p>
            </b-col>
            <b-col cols="10" class="text-left">
                <b-form-select :value="idCentre" @input.native="getBudgetsCentre" :options="allCentres" value-field="id" text-field="nomCentre" class="sm" style="width: 250px"></b-form-select>
            </b-col>

        </b-row>

        <table class="table table-bordered table-hover table-sm" >
            <thead class="thead-dark">
                <tr>
                    <td>Id Budget</td>
                    <td>Description</td>
                    <td>Qte globale</td>
                    <td>Qté consommée</td>
                    <td>Qté restante</td>
                    <td>Côut unitaire</td>
                    <td>Côut global</td>
                    <td>Date Debut</td>
                    <td>Date Fin</td>
                </tr>
            </thead>
            <tbody v-if="budgetsByCentre (idCentre).length > 0">
            <tr  v-for="(bud,b) in budgetsByCentre (idCentre)" :key="b">
                <td>{{bud.id}}</td>
                <td>{{bud.descripBudget}}</td>
                <td>{{bud.qteBudget}}</td>
                <td>{{bud.qteConsoBudget}}</td>
                <td>{{bud.qteBudget - bud.qteConsoBudget}} </td>
                <td>{{bud.coutUnitaire}}</td>
                <td>{{bud.qteBudget * bud.coutUnitaire}}</td>
                <td>{{bud.dateDebutBud | moment("DD / MM / YYYY H:mm:ss")}}</td>
                <td>{{bud.dateFinBud | moment("DD / MM / YYYY H:mm:ss")}}</td>
            </tr>
            </tbody>
            <tbody v-else>
             <tr>
                 <td colspan="9">Pas de budgets contenus dans ce centre...</td>
             </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import {mapState, mapActions,mapGetters} from 'vuex'
    export default {
        name: 'ListBudget',
       data () {
            return {
                qtebudgetReste: 0,
            }
       },
        computed: {
    /*        centreId: {
                get(){
                    return this.$store.state.centreStore.centreId
                },
                set(value) {
                    const id = parseInt(value);
                    return this.$store.commit('centreStore/UPDATE_ID', id)
                }
            },*/
            ...mapState({
                budgets: state => state.budgetStore.budgets,
                allCentres: state => state.centreStore.centres,
                idCentre: state => state.budgetStore.centreId
            }),
            ...mapGetters({
                centreById: 'centreStore/centreById',
                budgetsCentre: 'centreStore/budgetsByCentre',
                budgetsByCentre: 'budgetStore/findByBudgetsByCentreId'
            }),
            dateDebut(){
                let datedebut = null;
                this.budgets.forEach(budget => {
                    if(budget.dateDebutBud){
                        datedebut =  this.$moment(budget.dateDebutBud).format('DD / MM / YYYY H:mm:ss')
                    }
                })
                return datedebut
            },
            ddateFin(){
                let datefin = null;
                this.budgets.forEach(budget => {
                    if (budget.dateFinBud){
                        datefin =  this.$moment(budget.dateFinBud).format('DD / MM / YYYY H:mm:ss')
                    }
                })
                return datefin
            }
        },
        methods: {
            ...mapActions({
                getBudgets: 'budgetStore/getAllBudgets'

            }),
            getBudgetsCentre(e){
                if(e.target.value) {
                    let id = parseInt(e.target.value);
                    this.$store.commit('budgetStore/UPDATE_CENTREID', id);
                    console.log(this.idCentre)
                }
            }
        },
        created() {
            this.getBudgets()
        }
    }
</script>

<style scoped lang="scss">
    table{
        text-align: left;
        margin-top: 50px;
    }

    table thead{
        background-color: #17a2b8;
        color: white;
    }

    b-form-select{
        width: 200px;
    }

</style>