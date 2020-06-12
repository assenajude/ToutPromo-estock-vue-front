<template>
    <div class="Entree">
        <info-barre :name="nomView"></info-barre>
        <span>sortie des stocks ici</span>
    </div>
</template>

<script>
    import InfoBarre from "../components/InfoBarre";
    export default {
        name: 'EntreeStock',
        data() {
            return {
                nomView: 'Stock - Sorties'
            }
        },
        components: {
            InfoBarre
        }
    }
</script>
