<template>
  <header>
    <nav>
      <a href="/" class="tab-text logo">indigo</a>
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
    padding: 1rem 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  h1 > code {
    font-size: 28px;
    font-weight: bolder;
    letter-spacing: -2px;
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
    gap: 2rem;
  }

  .tab-text {
    text-decoration: none;
    font-family: Consolas, 'Courier New';
    font-weight: 900;
    padding: 2rem 0;
  }

  .logo {
    font-size: 20px;
  }
</style>