<template>
    <div>
        <b-form>
            <b-form-row>
                <b-col cols="4">
                <b-form-group>
                <label for="produit">Choix du produit: </label>
                <b-input
                        id="produit"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="choix du produit"
                        :value="localInputValue"
                        @input="changeInputValue"
                        @focusin="getInitialContent"
                ></b-input>
                <slot name="suggestion"></slot>
                </b-form-group>
                </b-col>

                <b-col cols="4">
                <b-form-group>
                <label for="quantite" >Quantité:</label>
                <b-input id="quantite" placeholder="Quantite.." v-model.number="newItem.quantite"></b-input>
                </b-form-group>
                </b-col>

                <b-col cols="2">
                <b-form-group>
                <b-button variant="info" @click.prevent="addNewVente">Ajouter a la liste</b-button>
                </b-form-group>
                </b-col>
            </b-form-row>


        </b-form>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'NewVente',
        data() {
            return {
                newItem: {
                    produit: '',
                    quantite: 0
                },
                selectecProd: ''
            }
        },
        computed: {
            ...mapState({
                localInputValue: state => state.stockStore.newValue
            })
 /*           inputValue: {
                    get() {
                        return this.$store.state.venteStore.newValue
                    },
                    set(value) {
                        return this.$store.commit('venteStore/SET_NEWVALUE', value)
                    }
            }*/

        },
        methods: {
            addNewVente() {
                let body = {
                    libelle: this.localInputValue,
                    quantite: this.newItem.quantite
                }
                this.$emit('newList', body)
            },
            changeInputValue(value) {
                this.$store.commit('stockStore/SET_NEWVALUE', value);
                this.$emit('changeState')
            },
            getInitialContent() {
                this.$emit('initialContent')
            }
        }
    }

</script>

<style>

</style>