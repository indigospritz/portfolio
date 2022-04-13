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

        <div class="temp">
          <article>
            <router-link :to="{ name: 'ProjectDetails', params: { id: project.id, name: project.name, url: project.url, desc: project.desc, source: project.source } }" class="project-title">
              <h2><code>{{ project.name }}</code></h2>
            </router-link>
          <p v-html="project.desc"></p>
          <!-- <TestingComponent /> -->
          </article>
        </div>
        <small>This is a test.</small>
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
      projects: []
    }
  },
  async created() {
    this.projects = await this.fetchProjects()
  },
  methods: {
    getImg(imgName) {
      return require(`@/assets/images/${imgName}`)
    },

    async fetchProjects() {
      const res = await fetch('http://localhost:5000/projects')
      const data = await res.json()
      return data
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
    padding: 0 1rem 1rem;
  }
</style>