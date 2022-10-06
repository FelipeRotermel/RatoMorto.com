<script>
    import Content from "@/components/Content.vue";

    export default {
        components: { Content }
    }
</script>

<template>
    <div class="container-fluid"> 
        <h3 class="display-4">Filmes em alta</h3>
        <div class="table text-center">
            <tbody>
                <tr>
                    <Content/>
                </tr>
            </tbody>
        </div>
    </div>  
</template>

<style scoped>

    h3 {
        margin: 20px;
    }

</style>