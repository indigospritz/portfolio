<template>
  <AppHeader/>
  <main>
    <router-view/>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
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
  min-height: 70vh;
  background: #eaebea;
  margin: auto;
  overflow: auto;
  margin-top: 1rem;
  padding: 2rem;
}
</style>
