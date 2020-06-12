<template>
    <div>
        <span>impression goes her</span>
        <button class="btn btn-info" @click="printPage">Imprimer</button>
    </div>

</template>

<script>
    export default {
        name: 'Impression',
        methods: {
            printPage() {
                window.print()
            }
        }
    }

</script>

<style>

</style>