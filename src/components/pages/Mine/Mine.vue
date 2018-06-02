<template>
	<div class="mine page">
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import {mapState} from 'vuex';

	export default{
		name : 'Mine',
		computed: mapState({
		  	userInfo: state => state.other.userInfo
		}),
		watch: {
		  	'userInfo.username':{
		  		immediate: true,
		  		handler (val)  {
			  		if( val ) {
				  		this.$router.replace({name: 'user'})
				  	} else {
				  		this.$router.replace({name: 'login'})
				  	}
			  	}
		  	}
		  }
	}
</script>
<style type="text/css" lang="scss" scoped>
	
</style>