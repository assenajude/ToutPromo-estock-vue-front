<template>
    <div>
        <b-nav style="position: sticky">
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
    </div>

</template>

<script>
    export default {
        name: 'BarreInfo'
    }

</script>

<style scoped lang="scss">

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
    }

    #selectBar{
        position: relative;
        margin-left: 320px;
        margin-right: -200px;
    }
</style>