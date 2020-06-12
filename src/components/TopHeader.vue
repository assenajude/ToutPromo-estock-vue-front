<template>
    <div>
        <div class="nav navbar" id="firstTop">
            <a href @click.prevent class="navbar-brand" style="font-size: 11px; color: #ffffff">
                <b-icon-grid-fill></b-icon-grid-fill>Demarrer ToutPromo
            </a>

            <ul class="nav" style="margin-right: 40px;">
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                        <font-awesome-icon icon="mail-bulk"/> toutpromo@gmail.com
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                        <font-awesome-icon icon="phone-alt"/> +225 08525827
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                        facebook
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                        twiter
                    </router-link>
                </li>
            </ul>
        </div>
        <header>
            <div class="nav navbar" >
                <a href @click.prevent class="navbar-brand">
                    <img src="../assets/stock-logo.png" />
                </a>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'TopHeader'

    }
</script>

<style scoped>
    header .navbar{
        background-color: white;
    }
</style>