<template>
    <div>
       <h3>Info about  {{id}} game</h3>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                id:this.$route.params.id,
            }
        }
    }
</script>

<style scoped>

</style>