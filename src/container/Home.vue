<template>
  <div id="container" :style="{background:theme==='light' ? 'green' : '#333'}">
    <div class="left_nav">
      <ul class="nav_list">
        <li class="item">
          <a href="#/component-a">ComponentA</a>
        </li>
        <li class="item">
          <a href="#/component-b">ComponentB</a>
        </li>
        <li class="item">
          <a href="#/component-c">ComponentC</a>
        </li>
        <li class="item">
          <a href="#/component-d">ComponentD</a>
        </li>
        <li class="item">
          <a href="#/component-d-b">ComponentDB</a>
        </li>
        <li class="item">
          <a href="#/component-d-b-a">ComponentDBA</a>
        </li>
        <li class="item" @click="navigatorTo" data-path='/component-e'>
          ComponentE
        </li>
      </ul>
    </div>
    <div class="right_container">
      <h2 @click="changeTheme">{{demo_text}}主题{{theme}}</h2>
      <h2 @click="changeUserName">用户名{{getName}}</h2>
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations, mapGetters } from 'vuex';
export default {
  data(){
    return{
      demo_text:'demo'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('routeEnter');
    next(vm=>{
      vm.demo_text = 'enter'
    });
  },
  beforeRouteUpdate(to,from,next){
    console.log('routeUpdate');
    console.log('this.$router',this.$router)
    console.log('this.$route',this.$route)
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave')
  },
  computed:{
    // ...mapState([
    //   'theme'
    // ])
    ...mapState({
      theme:state=>state.theme
    }),
    ...mapGetters([
      'getName'
    ])
  },
  mounted(){
    console.log('store',this.$store);
  },
  methods:{
    // ...mapMutations({
    //   'changeTheme':'SET_THEME'
    // }),
    navigatorTo(e){
      const path = e.target.dataset.path;
      this.$router.push({path,});
    },
    changeTheme(){
      let theme = this.theme==='light' ? 'dark' : 'light';
      this.$store.dispatch('changeTheme',theme);
    },
    changeUserName(){
      this.$store.dispatch('updateName','brm');
    }
  }
}
</script>

<style>
#container{
  padding:20px;
  display:flex;
}
.left_nav{
  width:200px;
  background:blue;
}
.right_container{
  flex:1;
  background:yellow;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
