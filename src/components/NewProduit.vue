<template>
    <div>
        <b-form @submit.prevent="addProd">
            <b-row>
            <b-col cols="2" style="margin-top: 10px">
                <p><strong>Choix du centre:</strong></p>
            </b-col>
            <b-col cols="10" class="text-left">
                <b-form-select :value="localId" @input.native="changeCategories" :options="allCentres" value-field="id" text-field="nomCentre" class="sm" style="width: 250px"></b-form-select>
            </b-col>
            </b-row>
            <b-row>
                <b-col cols="2" style="margin-top: 10px">
                    <p><strong>Categorie:</strong></p>
                </b-col>
                <b-col cols="10" class="text-left">
                    <b-form-select v-model="produit.categorieId" v-if="centreById(localId)" :options="centreById(localId).categories" value-field="id" text-field="libelle" class="sm" style="width: 250px"></b-form-select>
                </b-col>
            </b-row>
            <b-form-group label-cols-lg="2" label-cols="4" label="Designation : " label-for="design">
                <b-form-input size="sm" v-model="produit.designProd" required></b-form-input>
            </b-form-group>
            <b-form-group label-cols-lg="2" label-cols="4" label="Unité : " label-for="unite">
                <b-form-input size="sm" v-model="produit.unite" required></b-form-input>
            </b-form-group>
            <b-form-group label="Description :" label-for="descrip" label-cols="4" label-cols-lg="2">
                <b-form-input required v-model="produit.descripProd" size="sm"/>
            </b-form-group>
            <button class="btn btn-outline-info">Ajouter</button>
        </b-form>
        <span>{{produit.categorieId}}:produit</span>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import Produit from '../models/produit.model';
    export default {
        name: 'NewProduit',
        data(){
            return{
                produit: new Produit('','', '', ''),
                categorieId: 0
            }
        },

        computed: {
      /*      idCentre: {
                get(){
                    return this.$store.state.centreStore.idCentre
                },
                set(value){
                    let id = parseInt(value)
                    return this.$store.commit('centreStore/UPDATE_ID', id)
                }

            },*/
          ...mapState({
                  categories: state => state.categorieStore.categories,
                  allCentres: state => state.centreStore.centres,
                   localId: state => state.centreStore.newIdCentre,
          }),
          ...mapGetters({
              centreById: 'centreStore/centreById',
              categoriesCentre: 'centreStore/categoriesByCentre'

          }),
            currentGest () {
              return this.$store.state.auth.user
            }
        },
        methods: {
            addProd(){
                const body = {
                    userId: this.currentGest.id,
                    categorieId: this.produit.categorieId,
                    designProd: this.produit.designProd,
                    descripProd: this.produit.descripProd,
                    unite: this.produit.unite
                };
                this.$store.dispatch('produitStore/addProduit', body);
                this.produit = {}
            },

            changeCategories(e){
                if (e.target.value) {
                    let id = parseInt(e.target.value)
                    this.$store.commit('centreStore/UPDATE_ID', id);
                    console.log(this.centreById(this.localId));
                }
            }
        },
        created() {
        }

    }

</script>

<style></style>