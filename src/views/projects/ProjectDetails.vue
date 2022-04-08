<template>
  <transition name="fade">
    <div>
      <h1><code>Project: {{ name }}</code></h1>
      <h2><code>The job id is {{ url }}</code></h2>
      <article v-html="desc"></article>
      <img :src="source" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['url', 'name', 'desc', 'source']
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>