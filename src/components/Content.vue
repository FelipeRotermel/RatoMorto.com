<script>
</script>

<template>
    <router-link to="/card1">
    <div class="card text-center" href="#" style="width: 18rem;">
        <img src="https://fanatical.imgix.net/product/original/68b3eb95-ba46-4ec0-a13f-4f94cf1ab71e.jpg?auto=compress,format&w=400&fit=crop&h=" class="card-img-top" alt="...">
        <p>BadRats Show</p>
    </div>
    </router-link>
</template>

<style scoped>

    a , p{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }

    p {
        margin-top: 10px;
    }

    img {
        height: 400px;
    }

    .card {
        transition: 0.25s;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    .card:hover { 
        transform: scale(1.05);
        color: black;
    }
</style>