<template>
  <header>
    <nav>
      <a href="/" class="tab-text logo"><h1>indigo</h1></a>
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
      ]
    }
  }
}
</script>

<style scoped>
  header {
    background: #e5e9e7;
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
    gap: 2rem .5rem;
  }

  .tab-text {
    text-decoration: none;
    font-family: Consolas, 'Courier New';
    font-weight: 900;
    padding: .5rem 1rem;
    border-radius: 4px;
    color: #4b4141;
  }

  .logo {
    font-size: 20px;
    letter-spacing: -2px;
  }

  .router-link-active {
    background: #dddddd;

  }
</style>