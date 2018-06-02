<template>
	<div 
		class="back-top-box"
		v-scroll-hide = "isShow"
		scroll-hide-distance="300"
	>
		<transition
			enter-active-class="fadeIn"
			leave-active-class="fadeOut"
		>
			<div v-if="isShow"  class="back-top animated">
				<i class="fa fa-arrow-up"></i>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	export default{
		name : 'BackTop',
		data (){
			return {
				isShow : false
			}
		}
	}
</script>
<style type="text/css" lang="scss">
	@import './index.scss';
</style>