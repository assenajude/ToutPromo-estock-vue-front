<template>
    <div>
        <table class="table table-borderless table-sm table-hover" v-if="localCentres.length > 0">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nom centre</th>
                <th scope="col">Localité Centre</th>
                <th scope="col">Adresse Centre</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(centre,id) in localCentres" :key="id">
                <th scope="row">{{centre.id}}</th>
                <td>{{centre.nomCentre}}</td>
                <td>{{centre.localCentre}}</td>
                <td>{{centre.adresseCentre}}</td>
            </tr>
            </tbody>
        </table>
        <span v-else>Aucun centre trouvé..</span>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'ListCentre',
        computed: {
            ...mapState({
                localCentres: state => state.centreStore.centres
            })
        },
        methods: {

        },

    }

</script>

<style scoped lang="scss">
    table thead{
        background-color: #17a2b8;
        color: white;
    }

</style>