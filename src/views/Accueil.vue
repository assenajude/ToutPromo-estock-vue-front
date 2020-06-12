<template>
    <div style="margin: 20px">
        <Info-barre :name="name"></Info-barre>

        <Search-barre>
            <template v-slot:search>
                <input type="search" placeholder="chercher ici...">
                <b-icon icon="search" style="margin-left: -20px"></b-icon>
            </template>
            <template v-slot:filter>
                <select name="filter" id="filterSelect">
                    <option selected>Trier ici...</option>
                    <option value="date">Par Date</option>
                    <option value="produit">Par produit </option>

                </select>
            </template>
        </Search-barre>

        <table class="table table-striped table-hover table-sm" style="text-align: center">
            <thead>
            <tr>
                <th>
                    <input type="checkbox">
                </th>
                <th style="text-align: left">Dernière modif</th>
                <th style="text-align: left">Designation</th>
                <th>Stock Depart</th>
                <th>Entrée</th>
                <th>sortie</th>
                <th>Reste en stock</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody v-if="accueilMvts.length>0">
            <tr v-for="(mvt, m) in accueilMvts" :key="'mvt'+m" >
                <td>
                    <input type="checkbox">
                </td>
                <td align="left">{{mvt.createdAt | moment("DD/MM/YYYY H:mm:ss")}}</td>
                <td align="left">{{mvt.stock.libelle}}</td>
                <td>{{mvt.qteMvtDepart}}</td>
                <td>{{mvt.qteMvtEntree}}</td>
                <td>{{mvt.qteMvtSortie}}</td>
                <td>{{mvt.qteMvtReste}}</td>
                <td>
                    <a href="#"><b-icon icon="pencil-square" style="margin-right: 5px"></b-icon></a>
                    <a href="#" style="color: #860432"><b-icon icon="trash"></b-icon></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import InfoBarre from "../components/InfoBarre";
    import SearchBarre from "../components/SearchBarre";
    import {mapState} from 'vuex'
    export default {
        name:'Accueil',
        data () {
            return {
                name: 'Stock - Etats'
            }
        },
        components: {
            InfoBarre,
            SearchBarre
        },
        computed: {
            ...mapState({
                accueilStocks: state => state.stockStore.stocks,
                accueilMvts: state => state.mouvementStore.mouvements,
                qteFinMvt: state => state.mouvementStore.qteFinStock
            }),


        },
        mounted() {
            console.log(this.accueilMvts);
        }
    }
</script>

<style>
    .homeTable{
        background-color: #860432;
        color: white;
        height: 10px;
        font-size: xx-small;
    }

    table {
        text-align: left;
    }

    table thead{
        color: white;
        background-color: #17a2b8;
    }

    #searchIcon{
        color: #860432;
        z-index: 30;
        margin-left: -40px;
        padding-top: 2px;
    }

    #searchInput{
        position: relative;
        margin-left: 300px;
        width: 300px;
        height: 25px;
        border-radius: 25px;
    }

    #searchBar{
        background: url("../assets/barre-info.png") no-repeat;
        position: relative;
        width: 100%;
    }

    #selectBar{
        position: relative;
        margin-left: 320px;
        margin-right: -200px;
    }




</style>