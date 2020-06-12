<template>
    <div>
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link to="#" class="nav-link">
                    Rupture <b-badge variant="danger" pill>4</b-badge>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="#" class="nav-link">
                    Autre alert <b-badge variant="warning" pill>5</b-badge>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Alert'
    }

</script>

<style scoped>

</style>
