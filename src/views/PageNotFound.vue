<template>
  <div class="wrapper">
    <h2><code>404</code></h2>
    <h3><code>Page Not Found</code></h3>
    <!-- <span><code>Wait a minute... who are you? How did you end up in here.</code></span>
    <h3><code><b>Backroom</b> is this way Sir.</code></h3> -->
    <img src="@/assets/images/404.jpg" alt="page not found">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    text-align: center;
    display: grid;
    width: 100%;
  }

  @media (max-width: 700px) {
    .wrapper {
      width: 100%;
      margin: auto;
    }

    img {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: auto;
    }
  }
</style>