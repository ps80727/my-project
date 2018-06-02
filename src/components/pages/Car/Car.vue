<template>
	<div class="page car">
		<cell
			v-for = "good in cars"
			:key = "good.id"
			:title="good.masterName"
			:lable="good.slaveName+good.supplierId  + '*' +good.num"
			:src="good.skuList[0].image"
		>
			<mt-button @click="reduceGoodInfo(good)" type="danger" size = "small">-</mt-button>
			<mt-button @click="addGoodInCar(good)" type="danger" size = "small">+</mt-button>
		</cell>


		<total></total>
	</div>
</template>
<script type="text/javascript">
import {mapState, mapActions} from 'vuex';
import Total from './Total';
	export default{
		name : 'Car',
		components : {Total},
		computed : {
			...mapState({
				cars : state => state.buycar.cars 
			})
		},
		methods : {
			...mapActions(['addGoodInCar','reduceGoodInfo'])
		},
		mounted (){
			console.log(this);
		}
	}
</script>
<style type="text/css" lang="scss" scoped="">
	
</style>