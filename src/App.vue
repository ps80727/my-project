<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive exclude="Films">
    	<router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
import AppHeader from './components/commons/Header/Header'

export default {
  name: 'App',
  components : {
    AppHeader
  },
  created (){
    //在这里获取购物车信息
    this.$store.dispatch('initCars');
  }
}
</script>

<style lang="scss">
#app{
	width: 100%; height: 100%;
}
</style>
