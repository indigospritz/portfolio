<template>
  <header>
    <nav class="navbar-desktop">
      <!-- <a href="/" class="tab-text logo"><h1>indigo</h1></a> -->
      <div class="tab-wrapper">
        <router-link
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.path"
          v-text="tab.name"
          class="tab-text"
        />
      </div>
    </nav>

    <nav class="navbar-mobile">
      <h1 class="tab-text logo">indigo</h1>
      <div class="tab-wrapper">
        <router-link
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.path"
          v-text="tab.name"
          class="tab-text"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      tabs: [
        {
          path: '/',
          name: 'home'
        },
        {
          path: '/about',
          name: 'about'
        },
        {
          path: '/projects',
          name: 'projects'
        },
        {
          path: '/contact',
          name: 'contact'
        }
      ],
      screenSize: '',
      windowScreenSize: window.innerHeight
    }
  },

  watch: {
    windowScreenSize(newSize, oldSize) {
      this.screenSize = newSize - oldSize
    }
  },

  mounted() {
    this.onResize(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // getScreenWidth() {
    //   window.onresize = windowSize
    //   window.onload = windowSize
    // },

    onResize() {
      let windowSize = 0
      windowSize = window.innerWidth
      this.screenSize = windowSize
      return windowSize
    }
  }
}
</script>

<style scoped>
  header {
    /* background: #e5e9e7; */
    max-width: 1100px;
    margin: auto;
    padding: .5rem 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  ul {
    display: flex;
    gap: 3rem;
  }

  li {
    list-style: none;
  }

  .tab-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 2rem 1rem;
  }

  .tab-text {
    text-decoration: none;
    font-family: Consolas, 'Courier New';
    font-weight: 900;
    padding: .5rem 1rem;
    border-bottom: 3px solid transparent;
    color: #4b4141;
  }

  .tab-text:hover {
    border-bottom: 3px solid #d1d4d1;
  }

  .logo {
    font-size: 20px;
    letter-spacing: -2px;
  }

  .router-link:hover {
    border-bottom: 3px solid #d1d4d1;
  }

  .router-link-active {
    border-bottom: 3px solid green;
  }

  .router-link-active:hover {
    border-bottom: 3px solid #d1d4d1;
  }

  .navbar-mobile {
    display: none;
  }

  /* @media (max-width: 500px) {
    .tab-text {
      font-size: 100px;
    }
  }
 */
  @media (max-width: 700px) {
    .logo {
      letter-spacing: 0;
    }

    .tab-wrapper {
      gap: 2rem .5rem;
      flex-direction: row;
      padding-bottom: 1rem;
    }

    nav {
      justify-content: center;
      background-color: #e0e3e0;
    }

    h1 {
      font-size: 18px;
    }

    .tab-text {
      padding: 0 .3rem;
      font-size: 14px;
    }

    header {
      padding: 0;
    }

    .navbar-desktop {
      display: none;
    }

    .navbar-mobile {
      display: grid;
      align-items: center;
      align-content: center;
      text-align: center;
    }
  }
</style>
