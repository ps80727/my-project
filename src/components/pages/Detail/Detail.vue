<template>
	<div class="detail page">
		<div class="img-background img-box">
			{{film}}
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Detail',
		props:["id"],
		data (){
			return{
				film:{}
			}
		},
		methods:{
			getItem (){
				// /v4/api/film/4187?__t=1525862614896
				this.$http.get('/mz/v4/api/film/'+this.id,{
					params:{__t : Date.now()}
				}).then(res=>{
					this.film = res.data.data.film;
					 console.log(res);
				})
			}
		},
		created (){
			this.getItem();
		}

	}
</script>
<style type="text/css" lang="scss" scoped>
	
</style>