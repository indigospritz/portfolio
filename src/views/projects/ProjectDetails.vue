<template>
  <transition name="fade">
    <div>
      <h1><code>Project: {{ name }}</code></h1>
      <h2><code>The job id is {{ url }}</code></h2>
      <article v-html="desc"></article>
      <img :src="getImg(source)" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['url', 'name', 'desc', 'source'],
  methods: {
    getImg(imgName) {
      return require(`@/assets/images/${imgName}`)
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 50%;
    justify-content: center;
    margin: 1rem auto;
  }
</style>