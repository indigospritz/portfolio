<template>
  <div class="wrapper">
    <h1><code>About</code></h1>
    <div class="about-wrapper">
      <section class="icons">
        <div class="icon-wrapper">
          <i class="fa-brands fa-vuejs" title="asdasd"></i>
          <span>Vue</span>
        </div>

        <!-- <div class="icon-wrapper">
          <i class="fa-brands fa-node-js"></i>
          <span>Node</span>
        </div> -->

        <div class="icon-wrapper">
          <i class="fa-brands fa-js"></i>
          <span>JavaScript</span>
        </div>

        <div class="icon-wrapper">
          <img src="@/assets/icons/mysql.png" class="mysql" alt="">
          <span>MySQL</span>
        </div>

        <div class="icon-wrapper">
          <i class="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>

        <div class="icon-wrapper">
          <i class="fa-brands fa-css3"></i>
          <span>CSS</span>
        </div>

        <div class="icon-wrapper">
          <img src="@/assets/icons/jestjs.png" class="mysql" alt="">
          <span>Jest</span>
        </div>

        <div class="icon-wrapper">
          <i class="fa-brands fa-hackerrank"></i>
          <span>HackerRank</span>
        </div>
        
      </section>

      <article>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque culpa et alias earum quis eum deleniti quod aliquam necessitatibus expedita deserunt sit perspiciatis nostrum laborum excepturi ducimus ex ipsam delectus, veniam debitis commodi dicta vitae. Voluptates temporibus deleniti quis, alias atque aliquam dolore in laborum accusamus ratione illum, minus odit beatae! Blanditiis officiis facilis reprehenderit rerum quos eaque veritatis velit voluptatum nam vel, modi necessitatibus at a aspernatur quas sed ipsam commodi quaerat dicta enim? Nam cumque facere explicabo quaerat modi, doloribus officia eaque, itaque, tenetur mollitia laborum laboriosam enim id quis quo provident illo. Neque beatae quod optio.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellat consequatur enim quaerat minus, nemo facere exercitationem architecto quisquam. Maiores ipsum, facere magni assumenda dignissimos quisquam temporibus minima neque odio perspiciatis illum incidunt, cumque ad odit sequi velit dolorem, dolor soluta placeat hic amet provident. Neque eius porro consequatur sed.</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
  .wrapper {
    padding: 0 1rem;
  }
  .about-wrapper {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .icons {
    display: flex;
    gap: 0 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    width: 400px;
  }

  i {
    font-size: 28px;
  }

  p {
    font-size: 17px;
    font-family:Arial, Helvetica, sans-serif;
    line-height: 1.7rem;
  }

  article {
    width: 60%;
  }

  .icon-wrapper {
    box-sizing: border-box;
    margin-top: 1rem;
    height: 100px;
    width: 110px;
    background: #bfd8c0;
    display: grid;
    text-align: center;
    align-content: center;
    border-radius: 6px;
    gap: .5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .icon-wrapper:hover {
    transform: all scale(1.02);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,.2),0 6px 15px 0 rgba(0,0,0,.19);
  }

  span {
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
  }

  .mysql {
    max-width: 30px;
    margin: auto;
  }

  @media (max-width: 700px) {
    main {
      padding: 0 1rem;
    }

    .icons {
      width: 100%;
    }

    .icon-wrapper {
      flex-wrap: nowrap;
      width: 65px;
      height: 65px;
    }

    span {
      display: none;
    }

    .about-wrapper {
      justify-content: space-between;
      flex-direction: column;
    }

    article {
      width: 100%;
    }

    p {
      font-size: 14px;
    }

    h1 {
      font-size: 20px;
    }

  }
</style>
