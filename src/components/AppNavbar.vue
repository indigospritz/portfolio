<template>
  <header>
    <p>{{ screenSize }}</p>
    <input v-model="screenSize">
    <nav
      v-if="screenSize > 700"
      class="navbar-desktop"
    >
      <a href="/home" class="tab-text logo"><h1>indigo</h1></a>
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

    <nav
      v-else
      class="navbar-mobile"
    >
      <button>
        <span>---</span>
        <span>---</span>
        <span>---</span>
      </button>
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

  @media (min-width: 500px) {
    .logo {
      font-size: 20px;
    }

    ul {
      /* flex-direction: column; */
    }
  }

  @media (max-width: 700px) {
    .logo {
      font-size: 16px;
    }

    .tab-wrapper {
      gap: 2rem .5rem;
    }

    .tab-text {
      padding: .5rem .3rem;
    }

    header {
      padding: .5rem 1rem;
    }
  }
</style>