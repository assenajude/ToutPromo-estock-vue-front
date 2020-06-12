<template>
    <div>
       <table class="table table-sm table-borderless table-hover" v-if="produits.length > 0">
           <thead class="thead-dark">
            <tr>
                <td>Designation</td>
                <td>Description</td>

            </tr>
           </thead>
           <tbody>
           <tr v-for="prod in produits" :key="prod.id">
               <td>{{prod.designProd}}</td>
               <td>{{prod.descripProd}}</td>
           </tr>
           </tbody>

       </table>
        <span v-else>Aucun produit trouvé</span>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'ListProduit',
        computed:{
          ...mapState({
              produits: state => state.produitStore.produits
          })
        },
        methods: {
            ...mapActions({
                allProduits: 'produitStore/getAllProduits'
            })
        },
        mounted() {
            this.allProduits()
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