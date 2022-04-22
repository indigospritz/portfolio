<template>
  <section>
    <div class="card left">
      <h2><code class="card-header">Howdy! My name is Christian.</code></h2>
      <code class="card-body">A 23 year old Web Developer and Software Quality Assurance Engineer based in Cebu, Philippines. Testing web applications and finding bugs brings music to my ears.</code>
    </div>

    <div class="card right">
      <img src="@/assets/images/undraw_treasure_of-9-i.svg" class="card-figure" alt="Treasure Hunting">
    </div>

  </section>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style scoped>
  section {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    height: 70vh;
  }

  .card {
    display: grid;
    align-content: center;
    /* justify-content: center; */
    overflow: hidden;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    gap: 1rem;
  }

  .projects-header {
    font-size: 20px;
    margin-top: 5rem;
  }

  .card-header {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  .card-body {
    width: 100%;
  }

  h2, p {
    margin: .5rem 0;
  }

  code {
    font-size: 14px;
  }

  .left {
    width: 40%;
  }

  .right {

  }

  .card-figure {
    height: 400px;
    width: 100%;
    display: block;
  }

  .card-figure-sm {
    height: 180px;
    width: 100%;
  }

  .card-project {
    display: grid;
    align-content: top;
    text-align: center;
    /* border: 1px solid #c5c4c4; */
    width: calc(94% / 4);
  }

  @media (max-width: 630px) {
    .card {
      min-height: 250px;
    }

    .left {
      width: 60%;
    }

    .card-figure {
      height: 150px;
    }
  }

  @media (max-width: 700px) {
    section {
      padding: 0 .5rem;
      /* height: 80vh; */
    }
  }

</style>