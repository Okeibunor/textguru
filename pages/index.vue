<template>
  <main>
    <div class="container">
      <nav>
        <img class="logo" src="@/assets/logo.svg" alt="logo" />
        <ul>
          <li class="active">Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul class="right-nav">
          <li><NuxtLink to="login">Sign In</NuxtLink></li>
          <li><NuxtLink to="signup">Sign Up</NuxtLink></li>
        </ul>
        <img class="pattern" src="@/assets/pattern.svg" alt="pattern" />
      </nav>
      <img class="blob" src="@/assets/blob.svg" alt="blob" />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        class="hero"
      >
        <h1>Smart Image-to-text</h1>
        <h1>conversion</h1>
        <div class="hero-body">
          <p>Convert your snapped notes to texts in</p>
          <p>one place, easily edit extracted texts and</p>
          <p>export to PDF or save to cloud</p>
        </div>
        <div class="hero-links">
          <a href="#" class="signup">Start Free Trial</a>
          <a href="#" class="login"
            >Login <img src="@/assets/login.svg" alt="login"
          /></a>
        </div>
      </div>
      <img
        class="semi-circle"
        src="@/assets/semi-circle.png"
        alt="semi-circle"
        data-aos="fade-up-right"
        data-aos-offset="-100"
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      />
      <div class="offer-header">
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="-50"
          data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
          data-aos-mirror="true"
          data-aos-once="true"
          >What We Offer</span
        >
        <img src="@/assets/donut.png" alt="donut" class="donut" />
      </div>
      <div
        class="offer-body"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="-50"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <img src="@/assets/flower.svg" alt="flower" />
        <div>
          <h3>Extra High Accuracy</h3>
          <p>
            Convert your snapped notes to texts in one place, easily edit
            extracted texts and export to PDF or save to cloud Convert your
            snapped notes to texts in one place, easily edit extracted texts and
            export to PDF or save to cloud
          </p>
        </div>
      </div>
      <div
        class="offer-body"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="-50"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div>
          <h3>Super Fast Processing</h3>
          <p>
            Convert your snapped notes to texts in one place, easily edit
            extracted texts and export to PDF or save to cloud Convert your
            snapped notes to texts in one place, easily edit extracted texts and
            export to PDF or save to cloud
          </p>
        </div>
        <img src="@/assets/girls.svg" alt="girls" />
      </div>
      <div
        class="offer-body"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="-50"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <img src="@/assets/lamps.svg" alt="lamps" />
        <div>
          <h3>Cloud Storage for all Files</h3>
          <p>
            Convert your snapped notes to texts in one place, easily edit
            extracted texts and export to PDF or save to cloud Convert your
            snapped notes to texts in one place, easily edit extracted texts and
            export to PDF or save to cloud
          </p>
        </div>
      </div>
    </div>
    <div class="banner">
      <img
        data-aos="fade-right"
        data-aos-offset="-100"
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        id="compound"
        src="@/assets/Shapes.png"
        alt="compound images"
      />
      <h2>We use Artificial Intelligence</h2>
      <h2>to turn your notes to docs</h2>
      <p>
        Our software is designed to understand your written texts and
        <br />convert them convert them to text documents.
      </p>
      <a href="#">Start Free Trial</a>
      <img
        data-aos="fade-up-left"
        data-aos-offset="-100"
        data-aos-duration="1000"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        id="halfDonut"
        src="@/assets/half_donut.svg"
        alt="half donut"
      />
    </div>
    <nav class="bottom-nav">
      <img class="logo" src="@/assets/logo.svg" alt="logo" />
      <ul>
        <li class="active">Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  name: "index",
  auth: false,
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_typography.scss";
@import "../assets/css/_colors.scss";
main {
  cursor: url("@/assets/hand.svg"), auto;
}
.container {
  margin: 25px 10vw;
}
a {
  text-decoration: none;
}
nav {
  display: grid;
  grid-template-columns: 2.3fr 4.5fr 1.5fr;
  font-size: 20px;
  font-family: $bodyfont;
  margin-bottom: 50px;
  .logo {
    width: 200px;
    height: 50px;
    object-fit: contain;
  }
  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    width: 75vw;
    object-fit: contain;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  ul.right-nav {
    justify-content: space-evenly;
    li,
    li a {
      margin: initial;
      color: white;
      text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
      text-align: right;
    }
  }
  li,
  li a {
    list-style-type: none;
    margin: auto 30px;
    display: block;
    position: relative;
    cursor: pointer;
  }
  li::after,
  li a::after {
    content: "";
    visibility: hidden;
    bottom: -5px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: yellowgreen;
    transform-origin: left;
    transform: scale(0);
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  li:hover::after,
  li.active::after,
  a:hover::after,
  a.active::after {
    visibility: visible;
    transform: scale(1);
  }
}
.semi-circle {
  position: absolute;
  left: 0;
  top: 90vh;
}
.blob {
  position: absolute;
  left: 50px;
  z-index: -10;
  width: 250px;
  height: 200px;
  object-fit: contain;
}
.hero {
  margin: 100px auto;
  .hero-body {
    margin: 30px auto;
  }
  .hero-links {
    margin-top: 50px;
    a.signup {
      background-color: $primary-blue;
      color: white;
      margin-right: 20px;
    }
    a.login {
      background-color: $sky-blue;
      color: $primary-blue;
    }
  }
  h1 {
    @include heading-1($primary-blue);
    font-family: $headerfont;
  }
  p {
    @include medium-text($primary-blue);
    font-family: $bodyfont;
  }
  a {
    @include medium-text;
    text-decoration: none;
    padding: 20px;
    font-weight: 650;
    font-family: $headerfont;
    border-radius: 10px;
    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
      vertical-align: text-bottom;
      margin-left: 10px;
    }
  }
}
.offer-header {
  display: flex;
  justify-content: center;
  margin: 40vh auto 10vh auto;
  position: relative;
}
.offer-header span {
  position: relative;
  @include heading-2($primary-blue);
  font-family: $bodyfont;
}
.offer-header span::after {
  grid-column: 2/3;
  content: "";
  bottom: -5px;
  left: 0;
  position: absolute;
  width: 100%;
  height: 4px;
  transform-origin: center;
  transform: scale(0.8);
  background-color: yellowgreen;
}
.donut {
  position: absolute;
  right: 150px;
  top: 10px;
  width: 200px;
  height: 200px;
  object-fit: contain;
  z-index: -10;
}
.offer-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5vw;
  img {
    width: 100%;
    object-fit: contain;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      @include heading-3($primary-blue);
      font-family: $headerfont;
      margin-bottom: 30px;
    }
    p {
      @include medium-text($secondary-blue);
      font-family: $headerfont;
    }
  }
}
.banner {
  background: url("./assets/dark-grey-terrazzo.png"), #000000;
  font-family: $headerfont;
  padding: 15vh 0;
  margin-top: 15vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    @include heading-2(white);
  }
  p {
    @include medium-text(white);
    padding: 0 10vw;
    text-align: center;
    margin: 4vh auto;
  }
  a {
    @include medium-text;
    background-color: $primary-blue;
    color: white;
    margin-right: 20px;
    text-decoration: none;
    border-radius: 15px;
    padding: 15px 40px;
  }
}
#compound {
  position: absolute;
  top: -80px;
  left: -70px;
}
#halfDonut {
  position: absolute;
  object-fit: cover;
  bottom: 50px;
  right: 0;
}
nav.bottom-nav {
  display: grid;
  grid-template-columns: 2fr 5fr;
  padding: 25px 15px;
  margin: unset;
  ul {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
