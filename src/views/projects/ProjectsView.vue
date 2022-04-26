<template>
  <transition name="slide-fade">
    <div class="wrapper">
      <h1><code>Projects</code></h1>
      <section
        v-for="project in projects"
        :key="project.id"
        class="project-wrapper"
      >
        <div class="project-figure__wrapper">
          <router-link :to="{ name: 'ProjectDetails', params: { id: project.id, name: project.name, url: project.url, desc: project.desc, source: project.source } }" class="project-title">
            <img :src="getImg(project.source)" class="project-figure">
          </router-link>
        </div>

        <div class="project-body">
          <article>
            <router-link :to="{ name: 'ProjectDetails', params: { id: project.id, name: project.name, url: project.url, desc: project.desc, source: project.source } }" class="project-title">
              <!-- <h2><code>{{ project.name }}</code></h2> -->
            </router-link>
          <!-- <p v-html="project.desc"></p> -->
          <div class="project-desc">
            <h2><code>Coming Soon</code></h2>
          </div>
          <!-- <TestingComponent /> -->
          </article>
        </div>
        <!-- <small>This is a test.</small> -->
      </section>
    </div>
  </transition>
</template>

<script>
// import TestingComponent from '@/components/TestingComponent.vue'
export default {
  name: 'ProjectsView',
  // components: {
  //   TestingComponent
  // },
  data () {
    return {
      projects: [
        {
          "id": 1,
          "name": "Sample Project 1",
          "url": "sample-project-1",
          "desc": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto veritatis nobis? Doloribus repudiandae quibusdam error, maxime doloremqntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper ue aperiam pariatur? Aperiam veniam, eum sapiente natus des conseqEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequu</p>",
          "source": "undraw_progressive_app_m-9-ms.svg"
        },
        {
          "id": 2,
          "name": "Sample Project 2",
          "url": "sample-project-2",
          "desc": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          "source": "undraw_progressive_app_m-9-ms.svg"
        },
        {
          "id": 3,
          "name": "Sample Project 3",
          "url": "sample-project-3",
          "desc": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias vEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias vEum voluptatibus odit placeat, ut perspiciatis aspernatur accusamus consequuntur fugit in magnam amet porro quos commodi alias veritatis earum quod quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          "source": "undraw_two_factor_authentication_namy.svg"
        },
        {
          "id": 4,
          "name": "Sample Project 4",
          "url": "sample-project-4",
          "desc": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum et porro magni ut consectetur ad laborum dicta architecto ver veniam? Eum voluptatibus odit placeat, ut perspiciatis aspernd quas. Omnis animi dolorem ea ut quo praesentium sunt?</p><p>raesentium odit quo rem cupiditate error saepe aliquid fugiat quaerat asper</p>",
          "source": "undraw_content_team_3epn.svg"
        }
      ]
    }
  },
  methods: {
    getImg(imgName) {
      return require(`@/assets/images/${imgName}`)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    padding: 0 1rem;
  }
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
    width: 30%;
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
    padding: .5rem 1rem;
    min-height: 10rem;
    display: flex;
    justify-content: center;
  }

  .project-body {
    width: 100%;
    color: #504d4d;
  }

  .project-desc {
    display: flex;
    align-items: center;
  }

  .project-desc > h2 {
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    section {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .project-figure {
      width: 100%;
      min-width: 200px;
      height: auto;
    }
  }
</style>