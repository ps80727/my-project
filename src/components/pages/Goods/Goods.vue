<template>
	<div class="goods page">
		<cell
			v-for="good in goods"
			:key="good.id"
			:title="good.masterName"
			:lable="good.slaveName+good.supplierId"
			:src="good.skuList[0].image"
		>
			<mt-button 
				type="danger" 
				size="small"
				@click="addGoodInCar(good)"
			>加入购物车</mt-button>
		</cell>
	</div>
</template>
<script type="text/javascript">
import {mapActions} from 'vuex';
	export default{
		name : 'Goods',
		data(){
			return {
				goods:[]
			}
		},
		methods: {
			...mapActions(['addGoodInCar']),
			getGoods (){
				this.$http.get('/static/json/goods.json').then(res=>{
					this.goods = res.data;
					console.log(this.goods)
				})
			}
		},
		created (){
			this.getGoods();
		} 
	}
</script>
<style type="text/css" lang="scss" scoped="">
	
</style>