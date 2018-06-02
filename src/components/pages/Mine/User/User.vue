<template>
	<div class="user">
		<h4>username: {{userInfo.username}}</h4>
		<p><button @click = "EXIT">exit</button></p>
	</div>
</template>

<script type="text/javascript">
import {mapState, mapMutations} from 'vuex'
	export default{
		name : 'User',
		computed : {
			...mapState({
				userInfo : state => state.other.userInfo
			})
		},
		methods : {
			...mapMutations(['EXIT'])
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	
</style>