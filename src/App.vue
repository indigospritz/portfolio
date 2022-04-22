<template>
  <AppNavbar/>
  <transition name="slide-fade">
    <main>
      <router-view/>
    </main>  
  </transition>
  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: #e8f7f0;
  position: relative;
}

main {
  max-width: 1100px;
  min-height: 80vh;
  // background: #fafffa;
  margin: auto;
  overflow: auto;
  margin-top: 1rem;
  padding: 2rem;
}

 /* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
