<template>
    <div class="Entree">
        <info-barre :name="nomView"></info-barre>
        <span>Inventaire des stock ici</span>
    </div>
</template>

<script>
    import InfoBarre from "../components/InfoBarre";
    export default {
        name: 'EntreeStock',
        data() {
            return {
                nomView: 'Stock - Inventaire'
            }
        },
        components: {
            InfoBarre
        }
    }
</script>
