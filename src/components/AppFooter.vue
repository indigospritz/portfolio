<template>
  <footer>
    <span><code>Christian Del Monte v.1</code></span>
    <div class="socials">
      <a href="https://github.com/delmsnoob" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>

      <a href="https://twitter.com/indigomln404" target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a href="https://www.linkedin.com/in/christian-del-monte-87694812b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bax%2BSpVumR6uqdYlgSkZ4NA%3D%3D" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://instagram.com/indigomln404" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
  footer {
    /* background: #e5e9e7; */
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin-top: 1rem;
    /* align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4rem; */
    flex-shrink: 0;
  }

  .socials {
    display: flex;
    gap: .7rem;
  }

  span {
    font-weight: 900;
  }

  i, span {
    color: #6a6565;
  }

  @media (max-width: 700px) {
    footer {
      padding: 1rem;
      background-color: #e0e3e0;
    }
  }
</style>