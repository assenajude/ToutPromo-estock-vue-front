<template>
    <div>
        <table class="table table-borderless table-hover table-sm table-striped" >
            <thead>
             <tr>
                 <td>Matricule</td>
                 <td>Nom & prenoms</td>
                 <td>Adresse mail</td>
                 <td>Contact</td>
             </tr>
            </thead>
            <tbody>
            <tr v-for="gest in gestionnaires" :key="gest.id">
                <td>{{gest.matricule}}</td>
                <td>{{gest.nomGest}}</td>
                <td>{{gest.mailGest}}</td>
                <td>{{gest.contactGest}}</td>
            </tr>
            </tbody>

        </table>
    </div>

</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'ListGestionnaire',
        computed: {
            ...mapState({
                gestionnaires: state => state.gestionnaireStore.gestionnaires
            })
        },
        methods: {
            ...mapActions({
                getGest: 'gestionnaireStore/allGestionnaires'
            })

        },
        mounted() {
            this.getGest()
        }
    }
</script>

<style scoped lang="scss">
    table{
        text-align: left;
    }

    table thead{
        background-color: #17a2b8;
        color: white;
    }

</style>