<template>	
	<div  class="films page">
		<film-nav 
			:type = "type"
			:change-type = "changeType"
		></film-nav>
		<films-box :type="type"></films-box>


		<back-top
			size="small"
			v-back-top:click
		></back-top>		
	</div>
</template>
<script type="text/javascript">
import FilmNav from './FilmNav'
import FilmsBox from './FilmsBox'
	export default{
		name : 'Films',
		data (){
			return {
				type : 'now-playing'
			}
		},
		methods : {
			changeType(type){
				this.type = type;
			}
		},
		components :{
			FilmNav,FilmsBox
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	.films{
		padding:50px 15px 0; 
	}
</style>