<template>
  <div class="wrapper">
    <h1><code>Let's link!</code></h1>
    <section>
      <h2><code>Contact number: +63 995 165 4120</code></h2>
      <h2><code>Email: delmontechristian@outlook.com</code></h2>
      <h2><code>Addie: Salinas Drive, Lahug, Cebu City, Cebu, Philippines 6000</code></h2>
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
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* align-content: center; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    /* margin: auto; */
  }

  h1 {
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
</style>