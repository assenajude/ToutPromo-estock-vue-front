<template>
    <div>
        <table class="table table-sm table-striped table-hover" v-if="localFourns.length > 0">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Numero</th>
                <th>Domaine</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(fourn,f) in localFourns" :key="f">
                <td>{{fourn.nomFourn}}</td>
                <td>{{fourn.adresseFourn}}</td>
                <td>{{fourn.numFourn}}</td>
                <td>{{fourn.domaineFourn}}</td>

            </tr>
            </tbody>

        </table>
        <span v-else>Il n'y a pas de fournisseur enregistré</span>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListFournisseur',
        data () {
            return {

            }
        },
        computed: {
            ...mapState({
                localFourns: state => state.fournisseurStore.fournisseurs
            })
        },
        methods: {
            ...mapActions({
                getFournisseurs : 'fournisseurStore/getFournisseurs'
            })
        },

        created() {
            this.getFournisseurs()
        }
    }
</script>

<style>

</style>