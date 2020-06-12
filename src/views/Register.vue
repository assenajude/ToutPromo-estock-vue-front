<template>
    <div>
        <TopHeader />
        <div class="col-md-12">
            <div class="col"></div>
            <div class="col">
                <div class="card card-container">
                    <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                         id="profile-img"
                         class="profile-img-card">

                        <form name="form" @submit.prevent="handleRegister">
                                <div class="form-group">
                                    <label for="username">username:</label>
                                    <input type="text"
                                           name="username"
                                           v-model="user.username"
                                           id="username"
                                           class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email"
                                           v-model="user.email"
                                           class="form-control"
                                           id="email"
                                           :rules="{required: true, email: true, max:50}"
                                           name="email">
                                    <div v-if="submitted && errors"
                                         class="alert alert-danger">
                                        {{errors[0]}}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           class="form-control"
                                           v-model="user.password"/>
                                </div>
                            <div>
                                <button class="btn btn-primary btn-block">Sign up</button>
                            </div>
                        </form>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
    import User from '../models/user.model';
    import TopHeader from '@/components/TopHeader.vue'

    export default {
        name: 'Register',
        components: {
            TopHeader
        },
        data(){
            return {
                user: new User('', '', ''),
                submitted: false,
                successful: false,
                message: ''

            }
        },

        computed: {
            loggedIn(){
                return this.$store.state.auth.status.loggedIn;
            }
        },

        mounted() {
            if(this.loggedIn){
                this.$router.push('/profile');
            }
        },

        methods: {
            handleRegister(){
                this.message = '';
                this.submitted = true;
                this.$store.dispatch('auth/register', this.user).then(data => {
                    this.message = data.message;
                    this.successful = true;
                    this.$router.push('/login')
                }, error => {
                    this.message =
                        (error.response && error.response.data) || error.message || error.toString();
                    this.successful = false;
                });


            }
        }


    }
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }

    div.col-md-12{
        display: flex;
    }

    .card-container.card {
        max-width: 350px !important;
        padding: 40px 40px;
    }

    .card {
        background-color: #f7f7f7;
        padding: 20px 25px 30px;
        margin: 0 auto 25px;
        margin-top: 0px;
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


</style>