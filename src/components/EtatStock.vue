<template>

    <ul class="nav flex-column">
        <li class="nav-item">
            <router-link to="/accueil" class="nav-link">Etats</router-link>
        </li>

        <li class="nav-item">
            <router-link to="/entree" class="nav-link">Entrees</router-link>
        </li>

        <li class="nav-item">
            <router-link to="/sortie" class="nav-link">Sorties</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/periode-stock" class="nav-link">Par période</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/inventaire" class="nav-link">Iventaire</router-link>
        </li>
    </ul>

</template>

<script>

    export default {
        name: 'EtatStock'

    }
</script>

<style scoped>

</style>