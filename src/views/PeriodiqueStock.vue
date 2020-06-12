<template>
    <div class="Entree">
        <info-barre :name="nomView"></info-barre>

        <span>Stock par period ici</span>
    </div>
</template>

<script>
    import InfoBarre from "../components/InfoBarre";
    export default {
        name: 'EntreeStock',
        data() {
            return {
                nomView: 'Stock - Périodique'
            }
        },
        components: {
            InfoBarre
        }
    }
</script>
