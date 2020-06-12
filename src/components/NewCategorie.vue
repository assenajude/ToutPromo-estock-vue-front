<template>
    <div>
        <b-toast id="succesToastr" static  auto-hide-delay="5000" variant="success" toast-class="successToastr">
            <p> La categorie a été ajouté avec succès</p>
        </b-toast>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-row>
            <b-col cols="2" style="margin-top: 10px">
                <p><strong>Centre:</strong></p>
            </b-col>
            <b-col cols="10" class="text-left">
                <b-form-select v-model="centreId" :options="localCentres" value-field="id" text-field="nomCentre" class="sm" style="width: 250px"></b-form-select>
            </b-col>

            </b-row>

         <b-form-group label-cols="4" label-cols-lg="2" label-size="sm" label-for="libelle" label="Libelle:">
             <b-form-input id="libelle" v-model="categorie.libelle" required size="sm">

             </b-form-input>
         </b-form-group>
             <b-form-group label="Type:" label-for="type" label-size="sm" label-cols="4" label-cols-lg="2">
                 <b-form-input id="type" v-model="categorie.typeCategorie" required>

                 </b-form-input>
             </b-form-group>

            <button class="btn btn-outline-info">Ajouter</button>
        </b-form>
    </div>

</template>

<script>
    import Categorie from "../models/categorie.model";
    import {mapState} from 'vuex';
    export default {
        name: 'NewCategorie',
        data (){
            return {
                categorie: new Categorie('', ''),
                submitted: false,
                message: '',
                successful: false,
                centreId:1,
            }
        },
        computed: {
            ...mapState({
                localCentres: state => state.centreStore.centres
            })
        },
        methods: {
            onSubmit(){
                const body = {
                    centreId: this.centreId,
                    libelle: this.categorie.libelle,
                    typeCategorie: this.categorie.typeCategorie
                }
                this.submitted = true;
                this.$store.dispatch('categorieStore/addNew', body);
                this.message = 'success';
                this.$bvToast.show('succesToastr');
                this.categorie = {},
                    this.centreId = 1
            },
            onReset(){

            }
        }
    }

</script>

<style lang="scss" scoped>
    b-form-group[label] {
        font-weight: bold;
    }

</style>