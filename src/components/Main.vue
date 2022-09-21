<script>
    import Content from "@/components/Content.vue";

    export default {
        components: { Content }
    }
</script>

<template>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-evenly">
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
            <div class="col-3">
                <Content/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 100px;
    }
</style>