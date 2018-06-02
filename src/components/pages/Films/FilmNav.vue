<template>	
	<div  class="film-nav">
		<div 
			v-for = "nav in navs"
			:key = "nav.id"
			class="nav"
			:class = '{active:type===nav.type}'
			@click = "changeType(nav.type)"
		>{{nav.title}}</div>
	</div>
	
</template>
<script type="text/javascript">

	export default{
		name : 'FilmNav',
		props : ['type','changeType'],
		data (){
			return {
				navs : [
					{id:1, title:'正在热映',type:'now-playing'},
					{id:2, title:'即将上映',type:'coming-soon'}
				]
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.film-nav{
		height:46px; 
		margin:0 0.1rem; 
		border-bottom: solid #fe6e00 1px;
		
		.nav {
			float: left; 
			width: 50%; 
			height:100%; 
			text-align:center; 
			font-size:16px; 
			line-height:46px; 
			color:#6a6a6a;
			cursor:pointer; 

			&.active{
				color:#fe6e00; 
				border-bottom:solid;
			} 
		} 
	}
</style>