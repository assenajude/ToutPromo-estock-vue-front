<template>
    <div id="mainBarre">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <slot name="filter">filter barre her..</slot>
            </li>
            <li class="nav-item">
                <slot name="search">search barre her..</slot>
            </li>
        </ul>
 <!--       <div id="mainBarre">
        <slot name="filter">filter barre her..</slot>
        <slot name="search">search barre her..</slot>
        </div>-->
    </div>

</template>

<script>
    export default {
        name: 'SearchBarre'
    }

</script>

<style scoped lang="scss">

    input {
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #ccc;
        width: 20em;
        margin-left: 200px;
    }

    #mainBarre {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    select {
        width: 150px;
        height: 25px;
    }

</style>