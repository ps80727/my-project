<template>
	<div class="total">
		<mt-tabbar>
			<div class="left">
				总价钱：<span>{{totalInfo.price}}</span>
				&nbsp;&nbsp;
				&nbsp;&nbsp;
				总件数：<span>{{totalInfo.num}}</span>
			</div>
			<div class="right buy-btn">
				结算
			</div>
		</mt-tabbar>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from "vuex"
	export default{
		name : 'Total',
		computed :{
			...mapGetters(['totalInfo'])
		}
	}
</script>

<style type="text/css" lang="scss" scoped="">
	.total{
		.mint-tabbar{
			height: 60px;
			display:flex;
			
			justify-content: space-between;
			align-items:center;
			.left{
				padding: 10px;
				line-height: 40px;
			}
			.buy-btn{
				width: 1rem;
				height: 100%;
				line-height: 60px;
				background: #f60;
				color: #FFFFFF;
				text-align: center;
				font-size: 1.5em;
			}
		}
	}
</style>