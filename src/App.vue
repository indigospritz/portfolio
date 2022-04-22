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

  @media (max-width: 700px) {
    main {
      padding: 0;
    }
  }
</style>
