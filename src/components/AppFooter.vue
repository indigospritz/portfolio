<template>
  <footer>
    <span><code>Christian Del Monte</code></span>
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
    background: #e5e9e7;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }

  .socials {
    display: flex;
    gap: .7rem;
  }

  span {
    font-weight: 900;
  }

  i {
    color: #6a6565;
  }
</style>