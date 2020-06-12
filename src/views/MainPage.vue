<template>
    <div>
        <div class="nav navbar" id="firstTop">
            <a href @click.prevent class="navbar-brand" style="font-size: 11px; color: #ffffff">
                <b-icon-grid-fill></b-icon-grid-fill>Demarrer ToutPromo
            </a>
            <ul class="nav" style="margin-right: 40px;">
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                        toutpromo@gmail.com
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/compte" class="nav-link" style="color: #ffffff">
                         +225 08525827
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
            <b-navbar toggleable="lg" >
                <b-navbar-brand href="#">
                    <img src="../assets/variantLogo.png">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav style="margin-left: 40px; margin-bottom: 0;margin-top: 0">
                        <b-nav-item router-link to="/accueil">Accueil</b-nav-item>
                        <b-nav-item router-link to="#">
                            <select class="custom-select" style="border-radius: 15px; margin-left: 20px" >
                                <option selected>Choixr du centre...</option>
                                <option value="abidjan">Centrale Abidjan</option>
                                <option value="tiapoum">Centrale Tiapoum</option>
                                <option value="yakro">Centrale Yakro</option>
                                <option value="bonon">Centrale Bonon</option>
                                <option value="mankono">Centrale Mankono</option>
                            </select>
                        </b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <div @mouseover="onOver" @mouseleave="onLeave">
                        <b-nav-item-dropdown  right id="compteDropdown" ref="compte">
                            <template v-slot:button-content>
                                <em><b-icon icon="person">Compte</b-icon></em>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Message</b-dropdown-item>
                            <b-dropdown-item href="#">Notification</b-dropdown-item>
                            <b-dropdown-item href="#">Tableau de bord</b-dropdown-item>
                            <b-dropdown-item><button class="btn btn-sm btn-outline-danger" @click="logout">Deconnectez-vous</button></b-dropdown-item>
                        </b-nav-item-dropdown>
                        </div>
                        <div @mouseover="onAideOver" @mouseleave="onAideLeave">
                        <b-nav-item-dropdown right style="margin-right: 20px; margin-left: 20px" ref="aide">
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <em><b-icon icon="info-circle">Aide</b-icon></em>
                            </template>
                            <b-dropdown-item href="#">FAQ</b-dropdown-item>
                            <b-dropdown-item href="#">Assistance</b-dropdown-item>
                        </b-nav-item-dropdown>
                        </div>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>

        </header>
        <div class="mainContent">
            <aside>
                <div class="card main-card">
              <span class="card-header top-header">
            <input type="search" class="bordure" id="menu-search" placeholder="chercher dans le menu" />
          </span>
                    <div class="card-body scroll">
                        <AccordionMenu/>
                    </div>
                </div>
            </aside>
            <section id="content">
                <router-view/>
            </section>
        </div>
    </div>
</template>

<script>
    import AccordionMenu from '@/components/AccordionMenu.vue';
    import {mapActions} from 'vuex'

    export default {
        name: 'MainPage',
        components: {
            AccordionMenu,
        },
        computed: {

        },
        methods: {
            ...mapActions({
                getAllCentre: 'centreStore/getCentres',
                getAllClient: 'clientStore/getAllClients',
                getAllTransport: 'transporteurStore/getAllTransport',
                getAllMouvements: 'mouvementStore/getMouvements',
                getAllVente: 'venteStore/getVentes',
                getAllLigneVente: 'venteStore/getLigneVentes'
            }),
            logout(){
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            },
            onOver(){
                this.$refs.compte.visible = true
            },
            onLeave(){
                this.$refs.compte.visible = false
            },
            onAideOver(){
                this.$refs.aide.visible = true
            },
            onAideLeave(){
                this.$refs.aide.visible = false
            }
        },
        created() {
            this.getAllCentre();
            this.getAllClient();
            this.getAllTransport();
            this.getAllMouvements();
            this.getAllVente(),
                this.getAllLigneVente()
        }

    }
</script>

<style lang="scss" scoped>
    #firstTop{
        background-color: #17a2b8;
        height: 27px;
        padding-top: 0;
        padding-bottom: 0;
    }

    #firstTop ul li{
        font-size: 11px;
    }
    .mainContent{
        display: flex;
    }

    .mainContent section{
        flex: 2;
        height: 550px;
        overflow-y: auto;
        overflow-x: hidden;
    }


    .scroll{
        height: 420px;
        width: 300px;
        overflow-y: auto;
        background-color: #ff9f9b;
        padding-bottom: 2.5em;

    }

    b-navbar{
        background-color: white;
    }

    .card .card-header{
        background-color: #860432;
    }

    #compteDropdown:hover{
        display: block;
    }

    .mainContent aside ul li {
        color: red;
    }


    /deep/ .scroll ul li{
        text-align: left;
        list-style-image: url("../assets/lien.png");
    }

</style>