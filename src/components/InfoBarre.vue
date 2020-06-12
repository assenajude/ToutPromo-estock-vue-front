<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <span id="content">{{name}}</span>
            </a>
<!--            <slot name="printButton"></slot>-->
            <ul class="nav justify-content-end">
                <li class="nav-item">
                        <span class="nav-link">
                            <a href="#">


                                  <b-dropdown variant="outline-info" size="sm">
                                      <b-dropdown-header id="dropdown-header-label">
                                       Impression
                                      </b-dropdown-header>
                                    <template v-slot:button-content>
                                        <font-awesome-icon icon="print" size="1x"></font-awesome-icon>
                                    </template>
                                     <b-dropdown-form id="impressionForm">
                                         <div class="form-check"  style="font-size: 12px">
                                             <input type="radio" class="form-check-input" id="selection" value="selection" name="impression">
                                             <label class="form-check-label" for="selection">La selection</label>
                                         </div>
                                         <br>
                                           <div class="form-check" style="font-size: 12px">
                                             <input type="radio" class="form-check-input" id="tout" value="tout" name="impression">
                                             <label class="form-check-label" for="tout" size="sm">Toute la page</label>
                                         </div>
                                         <br>


                                         <b-button variant="primary" size="sm">Imprimer</b-button>
                                     </b-dropdown-form>
                                  </b-dropdown>
                            </a>

                        </span>
                </li>
            </ul>
        </nav>

    </div>


</template>

<script>
    export default  {
        name: 'InfoBarre',
        props: ['name']
    }

</script>

<style scoped lang="scss">
    #content {
        height: 40px;
        width: 30%;
        text-align: center;
        background-color: #860432;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border-radius: 30px 1px 30px 3px;
        padding: 0.5em;
    }

    #mainBarre {
        margin-bottom: 15px;
        float: left;
    }



</style>

