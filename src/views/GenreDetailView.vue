<script>
import GenreCard from "@/components/GenreCard.vue";

export default {
    props: ['id'],
    components: { GenreCard }
}

</script>

<template> 
    <Card :genreId="id" />
</template>