<script>
import Card from "@/components/Card.vue";

export default {
    props: ['id'],
    components: { Card }
}

</script>

<template> 
    <Card :filmeId="id" />
</template>