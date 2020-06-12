<template>
    <div>
        <info-barre :name="libellePage"></info-barre>
        <b-tabs pills card small ref="clientTab">
            <b-tab v-for="i in tabs" :key="'tab'+i" :title="i === 0? 'Liste': i === 1?'Nouveau': 'Facture'" >
                <div v-if="i === 0"> <ListVente /></div>
                <div v-if="i === 1">
                    <New-vente @newList="addNewList" @changeState="changeShowState"
                               @initialContent="getLocalInitialContent">
                        <template v-slot:suggestion>
                          <ul v-if="showPanel">
                              <li v-for="(stock, i) in getLocalFilteredStock"
                                  :key="'stock'+i" @click.prevent="selectItem(stock)">{{stock.libelle}}</li>
                          </ul>
                        </template>
                    </New-vente>
                    <List-new-vente :produits-in-list="localProductList"> </List-new-vente>
                    <b-form-group>
                          <button class="btn btn-outline-info sm"
                                  @click="editFacture" :disabled="localProductList.length < 0">editFacture</button>
                    </b-form-group>
                </div>
                <div v-if="i === 2">
                    <b-form @submit.prevent="saveCommande">
                        <b-form-group label-cols-sm="4" label-cols="4" label-for="client" label="Client" >

                              <b-form-select v-model.number="venteClientId" :options="localVenteClients" text-field="nomClient" value-field="id" class="sm"></b-form-select>

                        </b-form-group>

                            <b-form-group label-cols-sm="4" label-cols="4" label-for="transport" label="transport" >

                            <b-form-select v-model.number="venteTransportId" :options="localVenteTransport" text-field="nomTransport" value-field="id" class="sm"></b-form-select>

                        </b-form-group>
                    <List-new-vente :produits-in-list="localProductList"></List-new-vente>

                        <b-form-group>
                            <button type="submit" class="btn btn-outline-info">Valider la commande</button>
                        </b-form-group>
                    </b-form>

                </div>

            </b-tab>

        </b-tabs>


    </div>

</template>


<script>
    import ListVente from "./ListVente";
    import NewVente from "./NewVente";
    import ListNewVente from "./ListNewVente";
    import {mapState, mapGetters} from 'vuex';
    import InfoBarre from "./InfoBarre";

    export default {
        name: 'Vente',
        data() {
            return {
                tabs: [0, 1],
                tabIndex: 0,
                suggestionContent: '',
                libelleStocks: [],
                newTab: [],
                showPanel: false,
                venteClientId: 0,
                venteTransportId: 0,
                modalBox: '',
                libellePage: 'Commande - Vente'
            }
        },
        components: {
            ListVente,
            NewVente,
            ListNewVente,
            InfoBarre
        },
        computed: {
            ...mapState({
                localStocks: state => state.stockStore.stocks,
                localInputValue: state => state.stockStore.newValue,
                localProductList: state => state.venteStore.items,
                localVenteClients: state => state.clientStore.clients,
                localVenteTransport: state => state.transporteurStore.transporteurs,
            }),
            ...mapGetters({
                getProdByLibelle: 'stockStore/getStockBylibelle',
                getLocalFilteredStock: 'stockStore/getFilteredStock'

            }),

            venteGest() {
                return this.$store.state.auth.user
            }


            },
            methods: {
                editFacture() {
                    console.log(this.localProductList);
                    this.tabs.push(2);
                    if (this.tabs[2]) {
                        setTimeout(() => {
                            this.$refs.clientTab.nextTab()
                        }, 200)
                    }

                },

                getLocalInitialContent() {
                    this.showPanel = true;
                },
                selectItem (selectedStock) {
                    this.$store.commit('stockStore/SET_NEWVALUE', selectedStock.libelle);
                    this.showPanel = false;
                },
                changeShowState () {
                   this.showPanel = true;
                   this.$store.getters['stockStore/getFilteredStock']
                },

                addNewList(itemValue) {
                    const prod = this.$store.getters['stockStore/getStockBylibelle'](itemValue.libelle);
                    this.$store.dispatch('venteStore/addProductToList', {
                        id: prod.id,
                        prodQte: prod.qteEntree,
                        libelle: prod.libelle,
                        qteVente: itemValue.quantite,
                        prixVente: prod.prixVente
                    }).then(()=> {
                      this.$store.dispatch('mouvementStore/getMouvements')
                    }).catch(error => {
                        throw new Error(error.message)
                    })


                },
                saveCommande() {
                    let venteBody = {
                        gestionnaireId: this.venteGest.id,
                        clientId: this.venteClientId,
                        transporteurId: this.venteTransportId,
                        items: this.localProductList
                    };
                    this.$store.dispatch('venteStore/addNewVente', venteBody).then(() => {
                        this.$store.commit('venteStore/RESET_ITEMS');
                        this.venteClientId = 0,
                            this.venteTransportId = 0,
                        this.showMsgBoxTwo();
                    });

                },
                showMsgBoxTwo() {
                    this.modalBox = ''
                    this.$bvModal.msgBoxConfirm('Voulez-vous imprimer la facture?', {
                        title: 'Felicitation! Votre vente a été efffectué avec succès..',
                        size: 'sm',
                        buttonSize: 'sm',
                        okVariant: 'success',
                        okTitle: 'oui',
                        cancelTitle: 'non',
                        footerClass: 'p-2',
                        hideHeaderClose: false,
                        centered: true,
                        noCloseOnBackdrop: true
                    })
                        .then(value => {
                            if (value) {
                                this.tabs.splice(2, 1)
                                this.$router.push('/impression')
                            } else {
                                this.tabs.splice(2, 1)
                            }
                        })
                        .catch(err => {
                            throw new Error(err.message)
                            // An error occurred
                        })
                }

            },

    }

</script>


<style scoped lang="scss">
    ul li {
        list-style: none;
        cursor: pointer;
    }

    li:hover {
        background-color:#17a2b8;
        color: white;
    }

    ul{
        border: 1px solid #ccc;
        padding-top: 5px;
        padding-left: 0;
        text-align: left;
    }
</style>