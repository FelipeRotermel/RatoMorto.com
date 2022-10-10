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

    .table {
        overflow: auto;
        white-space: nowrap;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
      transition: 0.25s;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #ffd34f;
    }

</style>