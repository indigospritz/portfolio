<template>
  <transition name="slide-fade">
    <div>
      <h1><code>Projects</code></h1>
      <section
        v-for="project in projects"
        :key="project.id"
        class="project-wrapper"
      >
        <div class="project-figure__wrapper">
          <img :src="project.source" class="project-figure">
        </div>

        <article>
          <router-link :to="{ name: 'ProjectDetails', params: { id: project.id, name: project.name, url: project.url, desc: project.desc, source: project.source } }" class="project-title">
            <h2><code>{{ project.name }}</code></h2>
          </router-link>
          <p v-html="project.desc"></p>
        </article>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProjectsView',
  data () {
    return {
      projects: [
        {
          id: 1,
          name: "Sample Project 1",
          url: "sample-project-1",
          desc: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto veritatis nobis? Doloribus repudiandae quibusdam error, maxime doloremqntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper ue aperiam pariatur? Aperiam veniam, eum sapiente natus des conseqEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequu</p>",
          source: require('@/assets/images/undraw_progressive_app_m-9-ms.svg'),
        },
        {
          id: 2,
          name: "Sample Project 2",
          url: "sample-project-2",
          desc: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          source: require('@/assets/images/undraw_progressive_app_m-9-ms.svg')
        },
        {
          id: 3,
          name: "Sample Project 3",
          url: "sample-project-3",
          desc: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias vEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias vEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          source: require('@/assets/images/undraw_two_factor_authentication_namy.svg')
        },
        {
          id: 4,
          name: "Sample Project 4",
          url: "sample-project-4",
          desc: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernd quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          source: require('@/assets/images/undraw_content_team_3epn.svg')
        }
      ]
    }
  }
}
</script>

<style scoped>
  h1 {
    letter-spacing: -1.5px;
  }

  h2 {
    font-size: 18px;
    font-weight: 800;
    margin: 0;
    padding: .5rem 0;
    width: auto;
  }

  section {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  p {
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
    line-height: 1.4rem;
    border-top: 2px solid gray;
    margin-top: 0;
  }

  .project-figure__wrapper {
    max-height: 500px;
  }

  .project-figure {
    width: 300px;
    max-height: 500px;
    box-sizing: border-box;
    padding: 1rem;
    display: grid;
    text-align: center;
    align-content: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .project-figure:hover {
    transform: all scale(1.02);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.2),0 6px 15px 0 rgba(0,0,0,.19)
  }

  .project-title {
    text-decoration: none;
    color: #1c1c1c;
  }


  article {
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2),0 0 1px 0 rgba(0,0,0,.19);
    padding: 0 1rem;
  }
</style>