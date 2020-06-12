<template>
    <div>
        <b-form @submit.prevent="addReception">
            <fieldset>
                <legend>Choix Livraison</legend>
                <b-form-group  label-cols="4" label-cols-lg="2" label-size="sm" label="BE" label-for="be">
                    <b-form-select :value="idLivr" :options="livraisonsInRecep"
                                   text-field="id" value-field="id" size="sm"
                    @input.native="changeLivraison"></b-form-select>
                </b-form-group>
                <b-form-group label="Quantité livrée: " label-for="qteLivree" label-cols-lg="2" label-cols-sm="4" label-size="sm">
                    <b-form-input v-if="livraisonById(idLivr)" size="sm" v-model="livraisonById(idLivr).qteLivraison"></b-form-input>
                </b-form-group>
                <b-form-group label="Date livraison: " label-for="date" label-cols-lg="2" label-cols-sm="4" label-size="sm">
                    <b-form-input v-if="livraisonById(idLivr)" size="sm" v-model="livraisonById(idLivr).dateLivraison"></b-form-input>
                </b-form-group>
                <b-form-group label="Fournisseur: " label-for="fourn" label-cols-lg="2" label-cols-sm="4" label-size="sm">
                    <b-form-input v-if="livraisonById(idLivr)" size="sm" v-model="fournisseur(livraisonById(idLivr).achat.fournisseurId).nomFourn"></b-form-input>
                </b-form-group>
            </fieldset>

            <fieldset>
                <legend>New reception</legend>

                <b-form-group label="Stock" label-for="stock" label-cols-lg="2" label-cols="4" label-size="sm">
                    <b-form-select :options="stocksInRecep" value-field="id" text-field="libelle" size="sm"></b-form-select>
                </b-form-group>

                <b-form-group label-for="qteRecu" label="Confirmer la qte reçue" label-size="sm" label-cols-lg="2" label-cols="4">
                    <b-form-input type="number" size="sm" v-model.number="ligneLivraison.qteLigneLivr"></b-form-input>
                </b-form-group>
                <b-form-group label-for="dateRecep" label="Date reception" label-size="sm" label-cols-lg="2" label-cols="4">
                    <date-picker v-model="ligneLivraison.dateLigneLivr" :config="recepDateConfig" size="sm"></date-picker>
                </b-form-group>
            </fieldset>

            <button type="submit" class="btn btn-outline-info btn-sm">Valider</button>


        </b-form>

    </div>

</template>

<script>
import {mapState, mapGetters} from 'vuex'
    export default {
        name: 'NewReception',
        data() {
            return {
               recepDateConfig: {
                       useCurrent: true,
                       showClear: true,
                       showClose: true,
               },
                ligneLivraison: {
                   qteLigneLivr: 0,
                    dateLigneLivr: new Date()
                }
            }
        },
        computed: {
            ...mapState({
            livraisonsInRecep: state => state.livraisonStore.livraisons,
                idLivr: state => state.livraisonStore.idLivraison,
                stocksInRecep: state => state.stockStore.stocks,
                LocalFinStock: state => state.mouvementStore.qteFinStock
            }),
            ...mapGetters({
                livraisonById: 'livraisonStore/getLivraisonById',
                fournisseur: 'fournisseurStore/getFournById'
            })
        },
        methods: {
            changeLivraison(e) {
                let livraisonId = parseInt(e.target.value)
                this.$store.commit('livraisonStore/UPDATE_IDLIVRAISON', livraisonId);
                console.log(this.idLivr)
                console.log(this.livraisonById(this.idLivr));
            },
            addReception() {
                const body = {
                    livraisonId: this.idLivr,
                    qteLigneLivr: this.ligneLivraison.qteLigneLivr,
                    dateLigneLivr: this.ligneLivraison.dateLigneLivr
                };
                this.$store.dispatch('receptionStore/saveReception', body).then(() => {
                    this.$store.dispatch('mouvementStore/getMouvements')
                }).catch(err => {
                    throw new Error(err.message)
                });
            }
        }


    }

</script>

<style lang="scss" scoped>

    fieldset {
        border: 0.5px solid black;
        padding-right: 250px;
    }

    legend {
        width: 180px;
        font-size: 15px;
        background-color: #17a2b8;
        color: white;
    }

</style>