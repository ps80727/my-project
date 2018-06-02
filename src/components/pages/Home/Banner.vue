<template>
	<div class="swiper-container app-banner">
		<div class="swiper-wrapper img-background">
			<div 
			class="swiper-slide img-background"
			v-for = " banner in banners "
            :key  = " banner.id "
			>
				<img class="swiper-lazy" :data-src="banner.imageUrl" width="100%">
			</div>
		</div>
		<div class="swiper-pagination">	</div>
	</div>
</template>

<script type="text/javascript">
import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
	export default {
		name : 'AppBanner',
		data (){
			return {
				banners : []
			}
		},
		mounted (){
			this.$http.get('/mz/v4/api/billboard/home',{
				params : {__t: Date.now()}
			}).then(res =>{
				this.banners = res.data.data.billboards;
				
				Vue.nextTick(() => {
	                new Swiper('.app-banner', {
	                    pagination: {
	                        el: '.swiper-pagination',
	                    },
	                    autoplay: {
	                        delay: 2000,//1秒切换一次
	                    },
	                    lazy:true,
	                    loop: true
	                })
            	})
			})
		}
	}
</script>

<style type="text/css" lang="scss">
	.swiper-slide ,.swiper-wrapper{
        height: 2.1094rem;
    }
</style>