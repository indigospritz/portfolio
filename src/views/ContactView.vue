<template>
  <div class="wrapper">
    <h1><code>Let's link!</code></h1>
    <section>
      <h2><code>+63 995 165 4120</code></h2>
      <h2><code>delmontechristian@outlook.com</code></h2>
      <h2><code>Salinas Drive, Lahug, Cebu City, Cebu, Philippines 6000</code></h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  h2 {
    margin: 1rem 0;
    letter-spacing: -.5px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  section {
    width: 100%;
  }

  @media (max-width: 700px) {
    .wrapper {
      padding: 0 .5rem;
    }

    h1 {
      font-size: 18px;
      justify-content: flex-start;
    }

    h2 {
      font-size: 14px;
      justify-content: flex-start;
      margin: .5rem 0;
    }
  }

  
</style>