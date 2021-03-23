<template>
  <div class="container">
    <div class="wrapper">
      <div class="sidebar">
        <NuxtLink to="/"
          ><img class="logo" src="@/assets/logo.svg" alt="logo"
        /></NuxtLink>
        <NuxtLink to="/">
          <img src="@/assets/minilogo.svg" alt="minilogo" class="minilogo"
        /></NuxtLink>
        <ul>
          <div class="border-right"></div>
          <li class="active">
            <NuxtLink to="/dashboard"
              ><span class="icon_home"></span><span>Dashboard</span></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/editor"
              ><span class="icon_editor"></span
              ><span>Text Editor</span></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/documents"
              ><span class="icon_document"></span><span>My Docs</span></NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/translate"
              ><span class="icon_translate"></span
              ><span>Translate</span></NuxtLink
            >
          </li>
          <li @click="logout()">
            <span class="icon_logout"></span> <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
    <main>
      <nav class="navbar">
        <h2>Welcome, Favour</h2>
        <div>
          <img class="avatar" src="@/assets/avatar.jpeg" alt="avatar" />
          <div class="user">
            <h4>Okeibunor Favour</h4>
            <small>Demo Account</small>
          </div>
          <div class="nav_drop">
            <ul>
              <li><NuxtLink to="/settings">Account Settings</NuxtLink></li>
              <li @click="logout()">Logout</li>
            </ul>
          </div>
        </div>
      </nav>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_typography.scss";
@import "../assets/css/_colors.scss";

.container {
  font-family: $bodyfont;
  color: $primary-blue;
}
main {
  margin-left: 25vw;
  padding: 1.25rem 3.125rem;
  @media screen and (max-width: $small) {
    padding: 1.25rem 0.6rem;
  }
}
a {
  text-decoration: none;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.25rem 3.125rem;
  width: 25vw;
  ul {
    position: relative;
    height: 100%;
    margin-top: 1.875rem;
    padding-bottom: 1.25rem;
    padding-right: 1.875rem;
    .border-right {
      border-right: 0.15625rem solid rgba(196, 196, 196, 0.4);
      position: absolute;
      top: 5%;
      bottom: 5%;
      right: 0;
      @media screen and (max-width: $small) {
        display: none;
      }
    }
    li {
      font-size: 1.5625rem;
      line-height: 2.5rem;
      list-style-type: none;
      margin: 2.375rem auto;
      display: block;
      position: relative;
      cursor: pointer;
    }
    li:last-child {
      position: absolute;
      bottom: 0;
    }
    li a {
      transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    li a:hover {
      color: #5dca29;
    }
    li a ::after {
      content: "";
      height: 100%;
      width: 0.3125rem;
      background-color: #5dca29;
      position: absolute;
      left: -0.3125rem;
      bottom: 0;
      top: 0;
      border-radius: 1.5625rem;
      transform: scaleY(0);
      transform-origin: top;
      transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    li .nuxt-link-exact-active {
      color: $yellow-green;
    }
    li .nuxt-link-exact-active ::after {
      transform-origin: bottom;
      transform: scaleY(1);
    }
    @media screen and (max-width: $small) {
      li span:nth-of-type(2) {
        display: none;
      }
    }
  }
}

.logo {
  width: 11.25rem;
  object-fit: contain;
  @media screen and (max-width: $small) {
    display: none;
  }
}
.minilogo {
  width: 3.5rem;
  object-fit: contain;
  display: none;
  @media screen and (max-width: $small) {
    display: block;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h2 {
    @include heading-3-light($primary-blue);
  }
  > div {
    position: relative;
    display: flex;
    cursor: pointer;
    &:hover {
      .nav_drop {
        transform: scale(1);
        transition: transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
    .user {
      margin-left: 0.3125rem;
    }
    .nav_drop {
      position: absolute;
      box-shadow: 0rem 0.1875rem 0.25rem rgba(0, 0, 0, 0.25);
      padding: 0.625rem;
      top: 2.8125rem;
      border-radius: 0.3125rem;
      background: white;
      transform: scale(0);
      transform-origin: center;
      z-index: 10;

      li {
        list-style-type: none;
        margin: 0.9375rem 0.9375rem;
        display: block;
        cursor: pointer;
        &:hover {
          color: $yellow-green;
        }

        a {
          text-decoration: none;
          color: $primary-blue;
          &:hover {
            color: $yellow-green;
          }
        }
      }
    }
    .avatar {
      height: 3.125rem;
      width: 3.125rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

%icon {
  height: 3.125rem;
  width: 3.125rem;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.1875rem;
}
.icon_home {
  @extend %icon;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.765 2.76749C20.5432 2.59457 20.27 2.50066 19.9888 2.50066C19.7075 2.50066 19.4343 2.59457 19.2125 2.76749L1.25 16.7737L2.80375 18.7387L5 17.0262V32.5C5.00132 33.1626 5.26514 33.7977 5.73369 34.2663C6.20225 34.7349 6.83736 34.9987 7.5 35H32.5C33.1626 34.9987 33.7978 34.7349 34.2663 34.2663C34.7349 33.7977 34.9987 33.1626 35 32.5V17.0375L37.1962 18.75L38.75 16.785L20.765 2.76749ZM22.5 32.5H17.5V22.5H22.5V32.5ZM25 32.5V22.5C24.9993 21.8372 24.7357 21.2017 24.267 20.733C23.7983 20.2643 23.1628 20.0007 22.5 20H17.5C16.8372 20.0007 16.2017 20.2643 15.733 20.733C15.2643 21.2017 15.0007 21.8372 15 22.5V32.5H7.5V15.0775L20 5.33999L32.5 15.09V32.5H25Z' fill='%23323377'/%3E%3C/svg%3E%0A")
    no-repeat center;
}
.icon_editor {
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M27.4563 9.01333L30.9863 12.5417L27.4563 9.01333ZM29.7263 5.905L20.1813 15.45C19.6882 15.9425 19.3518 16.57 19.2147 17.2533L18.333 21.6667L22.7463 20.7833C23.4297 20.6467 24.0563 20.3117 24.5497 19.8183L34.0947 10.2733C34.3815 9.9865 34.609 9.64599 34.7643 9.27123C34.9195 8.89647 34.9994 8.4948 34.9994 8.08916C34.9994 7.68353 34.9195 7.28186 34.7643 6.9071C34.609 6.53234 34.3815 6.19183 34.0947 5.905C33.8078 5.61817 33.4673 5.39064 33.0926 5.23541C32.7178 5.08018 32.3161 5.00029 31.9105 5.00029C31.5049 5.00029 31.1032 5.08018 30.7284 5.23541C30.3537 5.39064 30.0132 5.61817 29.7263 5.905V5.905Z' stroke='%23323377' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M31.6665 25V30C31.6665 30.8841 31.3153 31.7319 30.6902 32.357C30.0651 32.9821 29.2172 33.3333 28.3332 33.3333H9.99984C9.11578 33.3333 8.26794 32.9821 7.64281 32.357C7.01769 31.7319 6.6665 30.8841 6.6665 30V11.6667C6.6665 10.7826 7.01769 9.93477 7.64281 9.30965C8.26794 8.68453 9.11578 8.33334 9.99984 8.33334H14.9998' stroke='%23323377' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
    no-repeat center;
  @extend %icon;
}
.icon_document {
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.58333 8.64667V28.125C9.58333 29.6168 10.176 31.0476 11.2309 32.1025C12.2857 33.1574 13.7165 33.75 15.2083 33.75H28.02C27.7393 34.371 27.2854 34.8978 26.7128 35.2674C26.1402 35.6369 25.4732 35.8334 24.7917 35.8333H15.2083C13.164 35.8333 11.2033 35.0212 9.75772 33.5756C8.31213 32.13 7.5 30.1694 7.5 28.125V11.875C7.49984 11.1935 7.69631 10.5264 8.06584 9.95378C8.43538 9.38115 8.96228 8.92729 9.58333 8.64667ZM21.4642 4.16667C21.9294 4.16661 22.3901 4.2582 22.8199 4.43622C23.2497 4.61423 23.6402 4.87519 23.9692 5.20417L31.4625 12.6975C31.7915 13.0264 32.0524 13.417 32.2305 13.8468C32.4085 14.2766 32.5001 14.7373 32.5 15.2025V28.125C32.5 29.0643 32.1269 29.9651 31.4627 30.6293C30.7985 31.2935 29.8976 31.6667 28.9583 31.6667H15.2083C14.269 31.6667 13.3682 31.2935 12.704 30.6293C12.0398 29.9651 11.6667 29.0643 11.6667 28.125V7.70834C11.6667 6.76903 12.0398 5.86819 12.704 5.204C13.3682 4.53981 14.269 4.16667 15.2083 4.16667H21.4642V4.16667ZM20.8333 6.25001H15.2083C14.8216 6.25001 14.4506 6.40365 14.1771 6.67714C13.9036 6.95063 13.75 7.32156 13.75 7.70834V28.125C13.75 28.9308 14.4033 29.5833 15.2083 29.5833H28.9583C29.3451 29.5833 29.716 29.4297 29.9895 29.1562C30.263 28.8827 30.4167 28.5118 30.4167 28.125V15.8333H24.375C23.4654 15.8333 22.5907 15.4834 21.9321 14.856C21.2735 14.2286 20.8816 13.3719 20.8375 12.4633L20.8333 12.2917V6.25001ZM29.5683 13.75L22.9167 7.09834V12.2917C22.9167 12.6578 23.0544 13.0105 23.3025 13.2798C23.5506 13.549 23.8909 13.7151 24.2558 13.745L24.375 13.75H29.5683Z' fill='%23323377'/%3E%3C/svg%3E%0A")
    no-repeat center;
  @extend %icon;
}
.icon_logout {
  @extend %icon;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.9061 28.5937H31.1601C30.9726 28.5937 30.7968 28.6758 30.6796 28.8203C30.4061 29.1523 30.1132 29.4727 29.8046 29.7773C28.5424 31.0407 27.0474 32.0476 25.4022 32.7422C23.6978 33.4621 21.8658 33.8314 20.0155 33.8281C18.1444 33.8281 16.3319 33.4609 14.6288 32.7422C12.9836 32.0476 11.4886 31.0407 10.2265 29.7773C8.96206 28.5182 7.95387 27.0258 7.25771 25.3828C6.53505 23.6797 6.17177 21.8711 6.17177 20C6.17177 18.1289 6.53896 16.3203 7.25771 14.6172C7.95302 12.9727 8.95302 11.4922 10.2265 10.2227C11.4999 8.95312 12.9804 7.95312 14.6288 7.25781C16.3319 6.53906 18.1444 6.17187 20.0155 6.17187C21.8866 6.17187 23.6991 6.53515 25.4022 7.25781C27.0507 7.95312 28.5311 8.95312 29.8046 10.2227C30.1132 10.5312 30.4022 10.8516 30.6796 11.1797C30.7968 11.3242 30.9765 11.4062 31.1601 11.4062H33.9061C34.1522 11.4062 34.3046 11.1328 34.1679 10.9258C31.1718 6.26953 25.9296 3.1875 19.9725 3.20312C10.6132 3.22656 3.10927 10.8242 3.20302 20.1719C3.29677 29.3711 10.789 36.7969 20.0155 36.7969C25.9569 36.7969 31.1757 33.7187 34.1679 29.0742C34.3007 28.8672 34.1522 28.5937 33.9061 28.5937ZM37.3788 19.7539L31.8358 15.3789C31.6288 15.2148 31.328 15.3633 31.328 15.625V18.5937H19.0624C18.8905 18.5937 18.7499 18.7344 18.7499 18.9062V21.0937C18.7499 21.2656 18.8905 21.4062 19.0624 21.4062H31.328V24.375C31.328 24.6367 31.6327 24.7852 31.8358 24.6211L37.3788 20.2461C37.4162 20.2169 37.4464 20.1795 37.4671 20.1369C37.4879 20.0942 37.4987 20.0474 37.4987 20C37.4987 19.9526 37.4879 19.9058 37.4671 19.8631C37.4464 19.8205 37.4162 19.7831 37.3788 19.7539V19.7539Z' fill='%23323377'/%3E%3C/svg%3E%0A")
    no-repeat center;
}
.icon_translate {
  @extend %icon;
  background: url("data:image/svg+xml,%3Csvg width='35' height='31' viewBox='0 0 35 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34.2761 29.2681L25.5261 11.7681C25.4482 11.6124 25.3285 11.4814 25.1804 11.3899C25.0323 11.2984 24.8617 11.2499 24.6876 11.2499C24.5135 11.2499 24.3428 11.2984 24.1947 11.3899C24.0466 11.4814 23.9269 11.6124 23.8491 11.7681L20.3666 18.733C17.4533 18.613 14.6493 17.5909 12.3422 15.808C15.0231 13.0683 16.623 9.45163 16.8469 5.625H20.9375C21.1861 5.625 21.4246 5.52623 21.6004 5.35041C21.7762 5.1746 21.875 4.93614 21.875 4.6875C21.875 4.43886 21.7762 4.2004 21.6004 4.02459C21.4246 3.84877 21.1861 3.75 20.9375 3.75H11.875V0.9375C11.875 0.68886 11.7762 0.450403 11.6004 0.274587C11.4246 0.0987719 11.1861 0 10.9375 0C10.6889 0 10.4504 0.0987719 10.2746 0.274587C10.0988 0.450403 10 0.68886 10 0.9375V3.75H0.9375C0.68886 3.75 0.450403 3.84877 0.274587 4.02459C0.0987719 4.2004 0 4.43886 0 4.6875C0 4.93614 0.0987719 5.1746 0.274587 5.35041C0.450403 5.52623 0.68886 5.625 0.9375 5.625H14.968C14.7442 8.993 13.3129 12.1672 10.9369 14.5647C9.48007 13.0968 8.36643 11.3244 7.67594 9.375C7.593 9.14057 7.42033 8.9487 7.19591 8.84158C6.9715 8.73447 6.71372 8.72089 6.4793 8.80383C6.24487 8.88677 6.05299 9.05944 5.94588 9.28385C5.83876 9.50827 5.82518 9.76604 5.90813 10.0005C6.67894 12.1776 7.91551 14.1602 9.53156 15.8102C7.07353 17.7186 4.04941 18.7531 0.9375 18.75C0.68886 18.75 0.450403 18.8488 0.274587 19.0246C0.0987719 19.2004 0 19.4389 0 19.6875C0 19.9361 0.0987719 20.1746 0.274587 20.3504C0.450403 20.5262 0.68886 20.625 0.9375 20.625C4.57872 20.6284 8.11024 19.3789 10.9391 17.0863C13.3777 19.0515 16.3407 20.2555 19.4589 20.5483L15.0991 29.2681C15.044 29.3782 15.0111 29.4981 15.0024 29.6209C14.9937 29.7437 15.0092 29.8671 15.0481 29.9839C15.087 30.1007 15.1486 30.2087 15.2292 30.3017C15.3099 30.3947 15.4081 30.4709 15.5182 30.526C15.6283 30.5811 15.7482 30.6139 15.871 30.6227C15.9938 30.6314 16.1172 30.6159 16.234 30.577C16.3508 30.538 16.4588 30.4765 16.5518 30.3958C16.6448 30.3152 16.721 30.217 16.7761 30.1069L19.017 25.625H30.3581L32.5991 30.1069C32.7103 30.3293 32.9053 30.4984 33.1412 30.577C33.3771 30.6556 33.6346 30.6372 33.857 30.526C34.0793 30.4148 34.2484 30.2198 34.327 29.9839C34.4056 29.748 34.3873 29.4905 34.2761 29.2681V29.2681ZM19.9545 23.75L24.6875 14.2838L29.4206 23.75H19.9545Z' fill='%23323377'/%3E%3C/svg%3E%0A")
    no-repeat center;
}
.icon_mini-logo {
  @extend %icon;
  background: url("data:image/svg+xml,%3Csvg width='104' height='73' viewBox='0 0 104 73' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='71.5' cy='35.5' r='32.5' fill='%235DCA29'/%3E%3Cpath d='M80.7273 28.4688H90.1023C88.9091 19.8395 81.3026 13.767 71.4375 13.767C59.9105 13.767 51.0256 22.0767 51.0256 36.2244C51.0256 50.0312 59.3352 58.5966 71.6293 58.5966C82.6449 58.5966 90.5071 51.6293 90.5071 40.1449V34.6477H72.2472V41.5938H81.6222C81.4943 47.0057 77.8082 50.4361 71.6719 50.4361C64.7472 50.4361 60.3793 45.2585 60.3793 36.1392C60.3793 27.0625 64.9176 21.9276 71.5866 21.9276C76.3381 21.9276 79.5554 24.3778 80.7273 28.4688Z' fill='white'/%3E%3Cpath d='M2.13068 21.9702H15.4901V58H24.6094V21.9702H37.9688V14.3636H2.13068V21.9702Z' fill='%23323377'/%3E%3C/svg%3E%0A")
    no-repeat;
}
</style>
