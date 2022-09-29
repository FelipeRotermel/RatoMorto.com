<script>
    import Content from "@/components/Content.vue";

    export default {
        components: { Content }
    }
</script>

<template>
<section class="pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <a class="mb-3" id="title">Filmes</a>
        <a class="btn btn-outline-warning mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
          <i class="fa fa-arrow-left"></i>
        </a>
        <a class="btn btn-outline-warning mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
          <i class="fa fa-arrow-right"></i>
        </a>
      </div>
      <div class="col-12">
        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>

                </div>
            </div>  
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                    <div class="col-md-3 mb-3">
                        <Content/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

    @media (max-width: 767px) {
		.carousel-inner .carousel-item > div {
			display: none;
		}
		.carousel-inner .carousel-item > div:first-child {
			display: block;
		}
	}

	.carousel-inner .carousel-item.active,
	.carousel-inner .carousel-item-next,
	.carousel-inner .carousel-item-prev {
		display: flex;
	}

	/* medium and up screens */
	@media (min-width: 768px) {

		.carousel-inner .carousel-item-end.active,
		.carousel-inner .carousel-item-next {
			transform: translateX(25%);
        }

		.carousel-inner .carousel-item-start.active, 
		.carousel-inner .carousel-item-prev {
			transform: translateX(-25%);
		}
	}

	.carousel-inner .carousel-item-end,
	.carousel-inner .carousel-item-start { 
		transform: translateX(0);
	}

    #title {
        font-size: 35px
    }

    a {
        margin-left: 10px;
    }

    .carousel-inner {
        margin-bottom: 100px;
    }

</style>