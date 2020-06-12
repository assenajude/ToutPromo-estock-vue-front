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
            <div class="nav navbar" >
                <a href @click.prevent class="navbar-brand">
                    <img src="../assets/stock-logo.png" />
                </a>
            </div>
        </header>


        <div class="row">

            <div class="col-4">
            </div>

            <div class="col-4">
                <div class="card card-container">
                    <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-image"
                            id="profile-image"
                            class="profile-img-card">

                        <form name="form" @submit.prevent="handleLogin">
                                <div class="form-group">
                                    <label for="username">username</label>
                                    <input
                                            type="text"
                                            v-model="user.username"
                                            class="form-control"
                                            name="username" id="username"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">password:</label>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           v-model="user.password"
                                           class="form-control" />
                                </div>

                            <div class="form-group">
                                <button class="btn btn-primary btn-block">
                                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                    <span>Login</span>
                                </button>
                            </div>

                            <div class="form-group">
                                <div v-if="message" class="alert alert-danger">{{message}}</div>
                            </div>
                        </form>

                    <span class="registerLink">Vous n'avez de compte? <router-link to="/register"> Créez un compte.</router-link></span>
                </div>
            </div>
            <div class="col-4">

            </div>

        </div>
    </div>

</template>

<script>
    import User from '../models/user.model';
    // import {required,  minLenght, maxLength, email} from 'vuelidate/lib/validators'

    export default {
        name: 'Login',
        data(){
            return {
                user: new User('', ''),
                loading: false,
                message: ''
            };
        },
   /*     validations: {
            email: {
                required,
                email
            },
            username: {
                required,
                minLenght: minLenght(5),
                maxLength: maxLength(255)
            },
            password: {
                required
            }
        },*/
        computed: {
            loggedIn(){
                return this.$store.state.auth.status.loggedIn;
            }
        },

        created (){
            if(this.loggedIn){
                this.$router.push('/');
            }
        },
        methods: {
            handleLogin(){
                this.loading = true;
                if (this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push('/');
                        },
                        error => {
                            this.loading = false;
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                        }
                    );
                }
            }
        },
    };
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }

    span.registerLink{
        font-size: 12px;
    }


    .card-container.card {
        max-width: 350px !important;
        padding-left: 40px;
        padding-right: 40px;
    }

    .card {
        background-color: #f7f7f7;
        padding: 20px 25px 30px;
        margin: 0 auto 25px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .profile-img-card {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }

    .row .col-4{
        display: flex;
    }

    header .navbar{
        background-color: white;
    }

</style>