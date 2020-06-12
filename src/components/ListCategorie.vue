<template>
    <div>
        <table class="table table-borderless table-hover table-sm" v-if="categories.length > 0">
            <caption routerlink to="/new-categorie"><b-icon icon="file-plus"></b-icon>Ajouter</caption>
            <thead class="thead-dark">
             <tr>
                 <td>
                     <b-form-checkbox id="cat" name="catCheck" @click="checkAll" v-model="isCheckAll">

                     </b-form-checkbox>
                 </td>
                 <td>Libelle</td>
                 <td>Description</td>
                 <td>Operation</td>
             </tr>
            </thead>
            <tbody>
            <tr v-for="(cat,c) in categories" :key="c">
                <td>
                    <b-form-checkbox :value="cat.libelle">

                    </b-form-checkbox>
                </td>

                <td>{{cat.libelle}}</td>
                <td>{{cat.typeCategorie}}</td>
                <td> <b-icon icon="pencil"></b-icon>| <b-icon-trash></b-icon-trash></td>
            </tr>
            </tbody>

        </table>
        <span v-else>Aucune categorie trouvée..</span>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'Categorie',
        data (){
            return {
                fields: ['libellé', 'description', 'operation'],
                isCheckAll: false,
            }

        },
        computed: {
            ...mapState({
              categories: state => state.categorieStore.categories
            })
        },
        methods: {
          ...mapActions(
              {
                  getAllCategories: 'categorieStore/getAllCategories'
              }
          ),
            checkAll() {

            }
        },
        created(){
                this.getAllCategories()
        }
    }
</script>

<style scoped>
    table{
        text-align: left;
    }
    table thead{
        background-color: #17a2b8;
        color: white;
    }

    tbody tr{
        padding-top: 15px;
    }

</style>