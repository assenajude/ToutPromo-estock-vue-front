<template>
    <div style="margin: 20px">
        <b-nav>
            <b-nav-item id="searchBar">

                <span class="input-group-append">
                    <select id="selectBar">
                    <option selected>Trier ici..</option>
                    <option>Date Modif</option>
                    <option> de A-Z</option>
                    <option>Stock plus grand</option>
                    <option>Stock plus petit</option>
                    </select>
                <input type="search" id="searchInput"  class="form-control" placeholder="Chercher..." aria-label="search">

                   <b-icon icon="search" id="searchIcon" style="width: 25px; height: 25px" ></b-icon>
               </span>
            </b-nav-item>
        </b-nav>


        <table class="table">
            <thead>
            <tr>
                <th>Dernière modif</th>
                <th>Designation</th>
                <th>Quantite</th>
                <th>Operation</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>08/02/2020</td>
                <td>Mangue</td>
                <td>08/02/2020</td>
                <td>08/02/2020</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:'HomeContent',
        computed: {

        },
        created() {

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


    #searchIcon{
        color: #860432;
        z-index: 30;
        margin-left: -40px;
        padding-top: 2px;
    }
    
    #searchInput{
        margin-left: 300px;
        width: 300px;
        height: 30px;
        border-radius: 25px;
    }

    #searchBar{
        background: url("../assets/barre-info.png") no-repeat;
        position: relative;
        width: 100%;
        padding-bottom: 50px;
    }

    #selectBar{
        margin-left: 320px;
        margin-right: -200px;
    }




</style>