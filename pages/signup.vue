<template>
  <main>
    <nav>
      <img class="logo" src="@/assets/logo.svg" alt="logo" />
    </nav>
    <div class="container">
      <div class="leftblock">
        <figure class="quote">
          <blockquote>
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="quote_icon"
            >
              <path
                d="M21.9531 0.421875C23.0469 0.421875 23.5938 0.640625 23.5938 1.07812C23.5938 1.26562 23.4219 1.42187 23.0781 1.54688C20.2031 2.70313 18.7656 4.95313 18.7656 8.29688C19.2031 8.23438 19.5156 8.20312 19.7031 8.20312C23.4531 8.20312 25.3281 10.0781 25.3281 13.8281C25.3281 17.5469 23.4531 19.4062 19.7031 19.4062C15.3594 19.4062 13.1875 17.0156 13.1875 12.2344C13.1875 7.07812 15.2656 3.375 19.4219 1.125C20.2969 0.65625 21.1406 0.421875 21.9531 0.421875ZM9.71875 0.5625C10.8125 0.5625 11.3594 0.78125 11.3594 1.21875C11.3594 1.40625 11.1875 1.5625 10.8438 1.6875C7.96875 2.84375 6.53125 5.09375 6.53125 8.4375C6.96875 8.375 7.28125 8.34375 7.46875 8.34375C11.2188 8.34375 13.0938 10.2188 13.0938 13.9688C13.0938 17.6875 11.2188 19.5469 7.46875 19.5469C3.125 19.5469 0.953125 17.1562 0.953125 12.375C0.953125 7.21875 3.03125 3.51562 7.1875 1.26562C8.0625 0.796875 8.90625 0.5625 9.71875 0.5625Z"
                fill="#BABABA"
              />
            </svg>

            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </blockquote>
          <figcaption>Hideo Kojima</figcaption>
        </figure>
        <img
          class="semi-circle"
          src="@/assets/circle_signup.svg"
          alt="semi-circle"
        />
      </div>
      <div class="rightblock">
        <h2>Create Free Account</h2>
        <small>Extract every detail from your notes </small>
        <div class="googlesignup">
          <img
            class="google-icon"
            src="@/assets/google.svg"
            alt="google icon"
          />
          <span>Sign up with Google</span>
        </div>
        <section><span>Or</span></section>
        <form @submit.prevent="signup">
          <div v-if="error" class="alert alert-danger">
            {{ error }}
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Your Email</label>
            <input
              class="form-input"
              ref="email"
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-placeholder="Enter your email"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Choose a password</label>
            <input
              class="form-input"
              ref="password"
              type="password"
              id="password"
              placeholder="Enter password"
            />
            <img
              class="pw_icon"
              v-if="pw_open"
              @click="togglePasswordState()"
              src="@/assets/pw_open.svg"
              alt="password icon"
            />
            <img
              class="pw_icon"
              @click="togglePasswordState()"
              v-else
              src="@/assets/pw_close.svg"
              alt="password icon"
            />
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                name=""
                id=""
                value="checkedValue"
              />
              Remember my password
            </label>
          </div>

          <input class="submit" type="submit" value="Sign up for free" />
        </form>
        <div>
          Do you already have an account?
          <NuxtLink to="/login">Log in</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  name: "login",
  data: function () {
    return {
      pw_open: false,
      error: null,
    };
  },
  methods: {
    togglePasswordState: function () {
      this.pw_open = !this.pw_open;
      let x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    signup: function () {
      let email = this.$refs.email.value;
      let password = this.$refs.password.value;

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          this.error = errorMessage;
          setTimeout(() => {
            this.error = null;
          }, 10000);
        });
    },
  },
  auth: false,
};
</script>


<style lang="scss" scoped>
@import "../assets/css/_typography.scss";
@import "../assets/css/_colors.scss";
@import "../assets/css/_main.scss";
@import url("https://fonts.googleapis.com/css2?family=Gayathri:wght@100;400;700&display=swap");
main {
  padding: 1.2rem 6.2rem;
  @media screen and (max-width: $small) {
    padding: 2rem;
  }
  font-family: $bodyfont;
}
nav {
  display: grid;
  grid-template-columns: 2.3fr 4.5fr 1.5fr;
  @media screen and (max-width: $small) {
    grid-template-columns: 1fr;
  }
  font-size: 20px;
  margin-bottom: 50px;
  .logo {
    width: 13rem;
    object-fit: contain;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: $small) {
    grid-template-columns: 1fr;
  }
  height: 100%;

  .leftblock {
    margin-top: 12vh;
    @media screen and (max-width: $small) {
      display: none;
    }
  }
  .rightblock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 7vw;
    @media screen and (max-width: $small) {
      padding: 0;
    }
    form {
      width: 100%;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin: 20px auto;
      position: relative;
      .form-input {
        width: 100%;
        border: 1px solid #8692a6;
        box-sizing: border-box;
        border-radius: 6px;
        padding: 15px;
        font-size: 16px;

        &::placeholder {
          font-size: 16px;
          color: #8692a6c4;
        }
      }
      .form-label {
        display: block;
        margin-bottom: 5px;
        color: #696579;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }
    }
    .submit {
      width: 100%;
      background-color: $primary-blue;
      color: white;
      border: none;
      padding: 20px;
      border-radius: 5px;
      margin: 20px auto;
      font-size: 20px;
      cursor: pointer;
      -webkit-appearance: none;
    }
    h2 {
      @include heading-3(black);
    }
    small {
      font-size: 13px;
      line-height: 28px;
      color: #8692a6;
    }
    .googlesignup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      min-width: 250px;
      padding: 15px 20px;
      cursor: pointer;
      margin: 30px auto;
      span {
        color: #8692a6;
        font-size: 15px;
        letter-spacing: 0;
      }
    }
    section {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #bababa;
      line-height: 0.1em;
      margin: 10px 0 20px;
      color: #bababa;
    }

    section span {
      background: #fff;
      padding: 0 10px;
    }
  }
}
.quote {
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  color: #696f79;
  margin: 0 !important;
  padding-right: 200px;
}
#quote_icon {
  position: absolute;
  top: -30px;
}
blockquote {
  position: relative;
}
figcaption {
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
}
.semi-circle {
  position: absolute;
  left: 0;
  bottom: 0;
  @media screen and (max-width: $small) {
    display: none;
  }
}
.pw_icon {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
