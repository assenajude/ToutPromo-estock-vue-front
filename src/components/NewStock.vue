<template>
    <div>
        <b-form @submit.prevent="addStock">
            <b-form-row>
                <b-col cols="2">Libellé: </b-col>
                <b-col cols="4">
                    <b-form-input type="text" v-model="stock.libelle"></b-form-input>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col cols="2">Entrée: </b-col>
                <b-col cols="4">
                    <b-form-input type="number" v-model="stock.qteEntree"></b-form-input>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col cols="2">Sortie: </b-col>
                <b-col cols="4">
                    <b-form-input type="number" v-model="stock.qteSortie"></b-form-input>
                </b-col>
            </b-form-row>
            <button class="btn btn-outline-info btn-sm">Ajouter</button>
        </b-form>

    </div>

</template>

<script>
    import Stock from "../models/stock.model";

    export default {
        name: 'NewStock',
        data () {
            return {
                stock: new Stock('', '', '')

            }
        },
        computed: {

        },
        methods: {
            addStock() {
                this.$store.dispatch('stockStore/newStock', this.stock);
                this.stock = {}

            }
        }
    }

</script>

<style scoped lang="scss">

</style>