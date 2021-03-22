<template>
  <main>
    <div class="container">
      <div class="mobileMenu" :class="{ visible: showMenu }">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">About Us</NuxtLink></li>
          <li><NuxtLink to="/">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/signup">Create Account</NuxtLink></li>
          <li><NuxtLink to="/login">Sign In</NuxtLink></li>
        </ul>
      </div>
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
        <span
          @click="toggleMenu"
          :class="[!showMenu ? 'icon_hamburger' : 'icon_close']"
        ></span>
        <img class="pattern" src="@/assets/pattern.svg" alt="pattern" />
      </nav>
      <img class="blob" src="@/assets/blob.svg" alt="blob" />
      <div class="hero">
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="-50"
          data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Smart Image-to-text
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="-50"
          data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          conversion
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="-50"
          data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
          data-aos-mirror="true"
          data-aos-once="true"
          class="hero-body"
        >
          <p>Convert your snapped notes to texts in</p>
          <p>one place, easily edit extracted texts and</p>
          <p>export to PDF or save to cloud</p>
        </div>
        <section class="hero-links">
          <NuxtLink class="signup" to="signup">Start Free Trial</NuxtLink>
          <NuxtLink class="login" to="login"
            >Sign In <img src="@/assets/login.svg" alt="login"
          /></NuxtLink>
        </section>
      </div>
      <img
        class="semi-circle"
        src="@/assets/semi-circle.png"
        alt="semi-circle"
        data-aos="fade-up-right"
        data-aos-offset="-100"
        data-aos-duration="700"
        data-aos-easing="cubic-bezier(0.2,0.8,0.2,1)"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      />
      <div class="offer-header">
        <span
          data-aos="fade-up"
          data-aos-duration="700"
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
        data-aos-duration="700"
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
        class="offer-body second"
        data-aos="fade-up"
        data-aos-duration="700"
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
        data-aos-duration="700"
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
        data-aos-duration="700"
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
        data-aos-duration="700"
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
  data: function () {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
$small: 600px;
$medium: 768px;
$large: 992px;
$xlarge: 1200px;

@import "../assets/css/_typography.scss";
@import "../assets/css/_colors.scss";

main {
  cursor: url("@/assets/hand.svg"), auto;
}
.mobileMenu {
  display: none;
  @include medium-text($primary-blue);
  @media screen and (max-width: $small) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 100;
    border-radius: 0 0 1.5rem 1.5rem;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: inherit;
      li {
        list-style-type: none;
        font-family: $headerfont;
        position: relative;
      }
      li:hover::after {
        content: "";
        bottom: -5px;
        left: 0;
        position: absolute;
        width: 100%;
        height: 0.15rem;
        background-color: yellowgreen;
        transform-origin: left;
        transform: scale(0);
        border-radius: 0.125rem;
        transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
    transform: translateX(100%);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

    &.visible {
      transform: translateX(0);
    }
  }
}
.container {
  margin: 1.5rem 10vw;
  @media screen and (max-width: $small) {
    margin: 1.5rem 7vw;
  }
}
a {
  text-decoration: none;
}
nav {
  display: grid;
  grid-template-columns: 2.3fr 4.5fr 1.5fr;
  @media screen and (max-width: $small) {
    grid-template-columns: 1fr;
  }
  font-size: 1.25rem;
  font-family: $bodyfont;
  margin-bottom: 3.125rem;
  .logo {
    width: 13rem;
    height: 4rem;
    object-fit: contain;
  }
  .pattern {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    width: 75vw;
    object-fit: contain;
    @media screen and (max-width: $small) {
      width: 78vw;
    }
  }

  %icon {
    height: 3.125rem;
    width: 3.125rem;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
  }
  .icon_hamburger {
    @extend %icon;
    background: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M19.5216 24.3576H29.4947M6.69897 8.20001H29.4947H6.69897ZM6.69897 16.2788H29.4947H6.69897Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-4' y='0.121216' width='44.1936' height='42.3152' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='5'/%3E%3CfeGaussianBlur stdDeviation='2.5'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")
      no-repeat center;
    display: none;
    z-index: 100;
    position: absolute;
    top: 1.5rem;
    right: 7vw;
    @media screen and (max-width: $small) {
      display: unset;
    }
  }
  .icon_close {
    @extend %icon;
    background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L15 15M1 15L15 1' stroke='%23323377' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
      no-repeat center;
    z-index: 100;
    position: fixed;
    top: 1.5rem;
    right: 7vw;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: $small) {
      display: none;
    }
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
    margin: auto 2rem;
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
    height: 0.15rem;
    background-color: yellowgreen;
    transform-origin: left;
    transform: scale(0);
    border-radius: 0.125rem;
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
  @media screen and (max-width: $small) {
    display: none;
  }
}
.blob {
  position: absolute;
  left: 3.125rem;
  z-index: -10;
  width: 10.25rem;
  height: 10.25rem;
  object-fit: contain;
  @media screen and (max-width: $small) {
    display: none;
  }
}
.hero {
  margin: 6.25rem auto;
  .hero-body {
    margin: 2rem auto;
  }
  .hero-links {
    margin-top: 3.125rem;
    transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    a.signup {
      background-color: $primary-blue;
      color: white;
      margin-right: 1.25rem;
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
    padding: 1.25rem;
    font-weight: 650;
    font-family: $headerfont;
    border-radius: 1rem;
    img {
      width: 2rem;
      height: 2rem;
      object-fit: contain;
      vertical-align: text-bottom;
      margin-left: 1rem;
    }
  }
}
.offer-header {
  display: flex;
  justify-content: center;
  @media screen and (min-width: $large) {
    margin: 40vh auto 10vh auto;
  }
  margin: 15vh auto 5vh;
  position: relative;
}
.offer-header span {
  position: relative;
  @include heading-3($primary-blue);
  font-family: $bodyfont;
}
.offer-header span::after {
  grid-column: 2/3;
  content: "";
  bottom: -5px;
  left: 0;
  position: absolute;
  width: 100%;
  height: 0.25rem;
  transform-origin: center;
  transform: scale(0.8);
  background-color: yellowgreen;
}
.donut {
  position: absolute;
  right: 9rem;
  top: 1rem;
  width: 10.25rem;
  height: 10.25rem;
  object-fit: contain;
  z-index: -10;
  @media screen and (max-width: $small) {
    display: none;
  }
}
.offer-body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: $small) {
    grid-template-columns: 1fr;
    margin: 10vh auto;
    &.second {
      div {
        grid-column: 1;
        grid-row: 2;
      }
      img {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }
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
      margin-bottom: 2rem;
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
    @media screen and (max-width: $small) {
      @include heading-3();
      margin: auto;
      text-align: center;
    }
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
    border-radius: 1rem;
    padding: 1rem 2.5rem;
  }
}
#compound {
  position: absolute;
  top: -5rem;
  left: -4.5rem;
  @media screen and (max-width: $small) {
    display: none;
  }
}
#halfDonut {
  position: absolute;
  object-fit: cover;
  bottom: 3.125rem;
  right: 0;
  @media only screen and (max-width: $small) {
    display: none;
  }
}
nav.bottom-nav {
  display: grid;
  grid-template-columns: 2fr 5fr;
  padding: 1.5rem 1rem;
  margin: unset;
  ul {
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: $small) {
      display: none;
    }
  }
}
</style>
