<template>
    <div>
        <div v-for="name in nameList" :key="name">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab" class="p-1">
                    <b-button  v-b-toggle="'accordion' + name" block href="#" variant="info"  class="bouton">{{name}}
                    </b-button>
                </b-card-header>
                <b-collapse :id="'accordion' + name" accordion="my-accordion" role="tabpanel">
                    <b-card-body>

                        <span v-if="name == 'Stock'">
               <EtatStock />
            </span>
                        <span v-else-if="name == 'Alert'">
              <Alert />
            </span>

                        <span v-else-if="name == 'Commande'">
                <Commande />
             </span>
                        <span v-else-if="name == 'Reception'">
                <Reception />
             </span>
                        <span v-else-if="name == 'Facturation'">
                 <Facturation />
             </span>
                        <span v-else-if="name == 'Production'">
                <Production />
             </span>
                        <span v-else-if="name == 'Budget'">
                <Budget />
             </span>
                        <span v-else-if="name == 'Collaboration'">
                <Collaboration />
             </span>
                        <span v-else-if="name == 'Evolution'">
                <Evolution />
             </span>
                        <span v-else>
                  <Parametre />
             </span>


                    </b-card-body>

                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
    import Alert from '@/components/Alert.vue'
    import EtatStock from '@/components/EtatStock.vue'
    import Production from '@/components/Production.vue'
    import Commande from '@/components/Commande.vue'
    import Reception from '@/components/Reception.vue'
    import Budget from '@/components/Budget.vue'
    import Collaboration from '@/components/Collaboration.vue'
    import Evolution from '@/components/Evolution.vue'
    import Parametre from '@/components/Parametre.vue'
    import Facturation from '@/components/Facturation.vue'




    export default {
        name: 'AccordionMenu',
        components: {
            EtatStock,
            Alert,
            Production,
            Commande,
            Reception,
            Budget,
            Collaboration,
            Evolution,
            Parametre,
            Facturation
        },
        data(){
            return{
                nameList: ['Stock','Alert', 'Commande', 'Reception','Facturation', 'Production', 'Budget', 'Collaboration', 'Evolution', 'Parametrage']
            }
        }
    }
</script>

<style>

    /* b-card-header .bouton font-awesome-icon .rotate{
         transform: rotate(180deg);
         transition-duration: 0.3s;
     }*/
</style>
