<template>
	<div class="cell">
		<div class="left">
			<div class="img-box img-background">
				<img :src="src" alt="" width="100%">
			</div>
			<div class="info">
				<h4>{{title}}</h4>
				<p>{{lable}}</p>
			</div>
		</div>
		<div class="right">
			<slot></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name : 'Cell',
		props : {
			title : String,
			lable : String,
			src : String
		}
	}
</script>
<style type="text/css" lang="scss">
	.cell{
		background: #fff;
		margin: 5px 0px;
		padding: 5px 10px;

		display: flex;
		flex-wrap: nowrap;
		justify-content:space-between;
		align-items: center;

		.left{
			flex-grow:1;
			flex-shrink:1;
			display:flex;
			align-items:center;
			overflow:hidden;
			.img-box{
				flex-shrink:0;
				width:0.5rem;
				height:0.5rem;
				overflow:hidden;
				margin-right: 0.1rem;
			}
			.info{
				flex-shrink:1;
				flex-grow:1;
				overflow:hidden;
				
				h4{
					width:90%;
					color:#333; font-size:bolder;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
				}
				p{
					width:80%;
					font-size:12px; color:#666666;
				}
			}
		}
		.right{
			flex-grow:0;
			flex-shrink:0;
		}

	}
</style>