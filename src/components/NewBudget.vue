<template>
    <div style="padding-bottom: 20px">
        <b-form @submit.prevent="addBudget">
            <fieldset>
                <legend>Choix Produit</legend>
            <b-row>
                <b-col cols="2" style="margin-top: 10px">
                    <p><strong>Centre:</strong></p>
                </b-col>
                <b-col cols="10" class="text-left">
                    <b-form-select :value="idCentre" :options="centresInBudget" @input.native="changeCategorie" value-field="id" text-field="nomCentre" class="sm" style="width: 250px"></b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2" style="margin-top: 10px">
                    <p><strong>Categorie:</strong></p>
                </b-col>
                <b-col cols="8" class="text-left">
                    <b-form-select :value="categorieId" @input.native="changeProduit" :options="categoriesInBudget(idCentre)" value-field="id" text-field="libelle" class="sm" style="width: 250px"></b-form-select>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2" style="margin-top: 10px">
                    <p><strong>Produit:</strong></p>
                </b-col>
                <b-col cols="10" class="text-left">
                    <b-form-select v-model="budget.produitId" v-if="centreByIdCentre(idCentre)" :options="produitsInBudget(categorieId)" value-field="id" text-field="designProd" class="sm" style="width: 250px"></b-form-select>
                    <b-form-select v-else :options="options" v-model="selectedProd"></b-form-select>
                </b-col>
            </b-row>
            </fieldset>
            <fieldset>
                <legend>Ajout Budget</legend>
                <b-form-group label-for="descrip" label="Description :" label-cols="2" label-cols-sm="3" label-align-sm="left">
                    <b-form-input id="descrip" size="sm" required v-model="budget.descripBudget" class="mt-3" align="left"></b-form-input>
                </b-form-group>
            <b-form-group label-for="qte" label="Quantité :"  label-cols="2" label-cols-sm="3" label-align-sm="left">
                <b-form-input id="qte" size="sm" required v-model="budget.qteBudget" class="mt-3"/>
            </b-form-group>
                <b-form-group label-for="cout" label="Côut Unitaire :"  label-cols="2" label-cols-sm="3" label-align-sm="left">
                    <b-form-input id="cout" size="sm" required v-model="budget.coutUnitaire" class="mt-3"/>
                </b-form-group>
            <b-form-group label-for="dateDebut" label="Date debut :"  label-cols="2" label-cols-sm="3" label-align-sm="left">
                <b-form-input type="date" id="dateDebut" size="sm" required v-model="budget.dateDebutBud" class="mt-3"/>
            </b-form-group>
            <b-form-group label-for="dateFin" label="Date Fin :"  label-cols="2" label-cols-sm="3" label-align-sm="left">
                <b-form-input type="date" id="dateFin" size="sm" required v-model="budget.dateFinBud" class="mt-3"/>
            </b-form-group>
            </fieldset>
            <button class="btn btn-outline-info" type="submit">Ajouter</button>
        </b-form>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import {Budget} from "../models/budget.model";

    export default {
        name: 'NewBudget',
        data(){
            return{
                budget: new Budget('', '', 0, 0, '', ''),
                selectedProd: null,
                options: [
                    {value: null, text: 'Pas de produits dans cette categorie...Veillez en ajouter'}
                ]
            }
        },
        computed: {
            ...mapState({
                produits: state => state.produitStore.produits,
                centresInBudget: state => state.centreStore.centres,
                idCentre: state => state.centreStore.newIdCentre,
                categorieId: state => state.categorieStore.idCategorie,
            }),
            ...mapGetters({
                categoriesInBudget: 'centreStore/categoriesByCentre',
                produitsInBudget: 'categorieStore/getProdByCat',
                centreByIdCentre: 'centreStore/centreById'
            }),
            currentGest() {
                return this.$store.state.auth.user
            }
        },
        methods: {
            addBudget(){
                let body = {
                    userId: this.currentGest.id,
                    produitId: this.budget.produitId,
                    descripBudget: this.budget.descripBudget,
                    dateDebutBud: this.budget.dateDebutBud,
                    dateFinBud: this.budget.dateFinBud,
                    qteBudget: this.budget.qteBudget,
                    coutUnitaire: this.budget.coutUnitaire


                }

                this.$store.dispatch('budgetStore/addNew', body);
                this.budget = {}
            },

            changeCategorie(event) {
                if (event.target.value){
                    let id = parseInt(event.target.value);
                    this.$store.commit('centreStore/UPDATE_ID', id)
                }
            },

            changeProduit(e) {
                let localId = parseInt(e.target.value);
                if (localId) {
                    this.$store.commit('categorieStore/UPDATE_CATID', localId)
                }
                console.log(this.categorieId);
                console.log(this.produitsInBudget(localId))
            }
        }
    }
</script>

<style scoped lang="scss">
    fieldset {
        border: 1px solid #ccc;
        padding-left: 2%;
        padding-right: 30%;
        margin-top: 15px;
    }

    legend {
        font-size: small;
        font-weight: bold;
        text-decoration: underline;
        color:white;
        background-color: #17a2b8;
        width: 100px;

    }

</style>