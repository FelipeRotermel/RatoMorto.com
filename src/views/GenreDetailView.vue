<script>
import GenreCard from "@/components/GenreCard.vue";

export default {
    props: ['id'],
    components: { GenreCard }
}

</script>

<template> 
    <GenreCard :genreId="id" />
</template>