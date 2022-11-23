<script>
import MovieSearch from "@/components/MovieSearch.vue";

export default {
    props: ['id'],
    components: { MovieSearch }
}

</script>

<template> 
    <MovieSearch :searchId="id" />
</template>