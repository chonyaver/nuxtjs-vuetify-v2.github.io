<template>
  <v-app>
    <v-content class="background">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

@font-face {
  src: url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
  font-family: "Roboto", sans-serif;
}

/* Globals */
*,
html,
body,
template {
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.0178571429em;
  word-spacing: normal;
  word-wrap: break-word;
  font-size-adjust: none;
  line-height: 1.5;
}

*[dark],
[dark],
*[dark]:below-level,
[dark]:below-level {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*[light],
[light],
*[light]:below-level,
[light]:below-level {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-white {
  color: #ffffff !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.top {
  position: fixed;
  top: 0;
}

.bottom {
  position: fixed;
  bottom: 0;
}

.absolute-left {
  position: fixed;
  left: 0;
  top: 70px;
}

.absolute-right {
  position: fixed;
  top: 70px;
  right: 0;
}

.top-left {
  position: fixed;
  top: 0;
  left: 0;
}

.top-right {
  position: fixed;
  top: 0;
  right: 0;
}

.top-right-m2 {
  position: fixed;
  top: 3px;
  right: 10px;
}

.bottom-right {
  position: fixed;
  bottom: 60px;
  right: 5px;
}

.pointer {
  cursor: pointer;
}

/* Backgrounds and buttons */
.bg4 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439353/public/svg/bg4_f33lc3.svg");
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center top;
}

.bg6 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689237872/public/svg/bg6.svg");
  background-size: cover;
  background-repeat: repeat-x;
  background-position: left top;
}

.bg8 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690097207/public/svg/bg8_vbrp61.svg");
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center top;
}

.bg9 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689159993/public/svg/bg9.svg");
  background-size: contain;
  background-repeat: repeat-x;
  background-position: left top;
}

.bg11 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690051131/public/svg/bg11_vnhmuu.svg");
  background-size: contain 66px;
  background-repeat: repeat-x;
  background-position: left top;
}

.bg12 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690051131/public/svg/bg12_wnd2zl.svg");
  background-size: cover;
  background-repeat: repeat-x;
  background-position: left top;
}

.bg13 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689256266/public/svg/bg13.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.bg10-2 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689160831/public/svg/bg10-2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.background {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689237872/public/svg/background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
}

.bg-animate {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1691534265/public/svg/bg-animate.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
}

.bg-dialog {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1688640542/public/web/bg300-44_grzih3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
}

.bg-dialog1 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690787838/public/web/LINE_P20190113_154935282_5_nc3gyj.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center top;
}

.btn-left2 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439354/public/svg/btn-left2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
}

.btn-right2 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439203/public/svg/btn-right2.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}

.blue-pp {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/blue-pp_etvuhf.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.blue-wm {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/blue-wm_mo344u.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.red-pm {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/red-pm_tgtw2v.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.green-nt {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/green-nt_zbmo4x.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.purple-sk {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/purple-sk_qvoroy.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.btn-line {
  width: 44px;
  height: 44px;
  background: url("https://firebasestorage.googleapis.com/v0/b/metang.appspot.com/o/public%2Fline_88.png?alt=media&token=681c35b3-6f2b-4191-a510-fe2d4e98facc");
  background-size: 44px 44px;
}

.bg-line {
  background-color: #00b900 !important;
}

.transparent {
  background-color: transparent !important;
}

.bg-white {
  background-color: #ffffff !important;
}

.bg-light {
  background-color: ghostwhite !important;
}

.pink1 {
  background-color: #e002a5 !important;
}

.pink2 {
  background-color: #ffd5f4 !important;
}

.pink3 {
  background-color: #88286e !important;
}

.dark2 {
  background-color: black !important;
}

.dark3 {
  background: linear-gradient(180deg, #88286e8c, #111111b0);
  background-size: 100% 100%;
}

.btn1 {
  background: radial-gradient(at center, ghostwhite, #cccccc);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

.btn2 {
  background: radial-gradient(at center, #521943, #932c77);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

.btn2-2 {
  background: radial-gradient(at center, #521943c0, #932c77c2);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Text and borders */
.t-transparent {
  color: transparent !important;
}

.t-text {
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  letter-spacing: 0.0178571429em;
}

.small {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  letter-spacing: 0.0178571429em;
}

.h6 {
  font-family: "Roboto", sans-serif;
  font-size: 0.9987656789rem;
  letter-spacing: 0.0178571429em;
  font-weight: 500;
}

.large {
  font-family: "Roboto", sans-serif;
  font-size: 0.8998756789rem;
  letter-spacing: 0.0178571429em;
  font-weight: 500;
}

.medium {
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.0178571429em;
  font-weight: 300;
}

.t-btn {
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.0175em;
  font-weight: 400;
}

.t-light {
  color: #655d62 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-pink1 {
  color: #e002a5 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-pink2 {
  color: #ffd5f4 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.t-pink3 {
  color: #88286e !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-blue-pp {
  color: #0072b5 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-line {
  color: #00b900 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-shadow {
  text-shadow: 0px 0px 3px #11111189;
}

.bd-0 {
  border-bottom: none;
  border-top: none;
  border-right: none;
  border-left: none;
}

.bd-all {
  border-bottom: 1px solid #949092;
  border-top: 1px solid #949092;
  border-right: 1px solid #949092;
  border-left: 1px solid #949092;
}

.bd-inline {
  border-bottom: 1px solid #949092;
  border-top: 1px solid #949092;
  border-right: none;
  border-left: none;
}

.bd-t {
  border-left: none;
  border-top: 1px solid #949092;
  border-bottom: none;
  border-right: none;
}

.bd-r {
  border-bottom: none;
  border-top: none;
  border-right: 1px solid #949092;
  border-left: none;
}

.bd-b {
  border-bottom: 1px solid #949092;
  border-top: none;
  border-right: none;
  border-left: none;
}

.bd-l {
  border-top: none;
  border-left: 1px solid #949092;
  border-bottom: none;
  border-right: none;
}

.bd-rb {
  border-bottom: 1px solid #949092;
  border-top: none;
  border-right: 1px solid #949092;
  border-left: none;
}

.bd-lb {
  border-bottom: 1px solid #949092;
  border-top: none;
  border-left: 1px solid #949092;
  border-right: none;
}

.bd-rt {
  border-top: 1px solid #949092;
  border-bottom: none;
  border-right: 1px solid #949092;
  border-left: none;
}

.bd-lt {
  border-top: 1px solid #949092;
  border-bottom: none;
  border-left: 1px solid #949092;
  border-right: none;
}

.bd-4 {
  border-radius: 4px !important;
}

.bd-7 {
  border-radius: 7px;
}

.bd-50 {
  border-radius: 50%;
}

.bd-pink2 {
  border-left: 1px groove #ffd5f4;
  border-right: 1px groove #ffd5f4;
  border-top: 1px groove #ffffff;
  border-bottom: 1px groove #ffd5f4;
}

.shadow {
  box-shadow: 0px 3px 10px #433c40;
}

a,
.link,
nuxt-link {
  text-decoration: none;
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
    "Droid Sans Mono", monospace, monospace;
}

::placeholder,
[label],
v-text-field,
v-text-field::placeholder,
v-text-field::-ms-value,
v-text-field[label],
v-text-field[value],
v-text-field::after,
v-text-field:below-level,
v-autocomplete,
v-autocomplete[label],
v-autocomplete::after,
v-autocomplete::selection,
v-autocomplete:below-level,
v-file-input,
v-file-input[label],
v-file-input[value],
v-file-input::-ms-value,
v-file-input::after,
v-file-input::placeholder,
v-file-input:below-level {
  font-size: 0.7765456789rem;
  align-items: center;
  text-align: center;
}

.grad1 {
  background: linear-gradient(180deg, #ffffff, #e1a5d1);
  background-size: 100% 100%;
  background-position: center top;
}

.grad2 {
  background: linear-gradient(180deg, #e002a5, #982278);
  background-size: 100% 100%;
  background-position: center top;
}

.grad5 {
  background: radial-gradient(at top, #e1a5d1, #88286e);
  background-size: 100% 100%;
  background-position: center top;
}

.grad6 {
  background: radial-gradient(#e002a5, #e1a5d1);
  background-size: 100% 100%;
  background-position: center center;
}

.grad7 {
  background: linear-gradient(0deg, #521943c0, #932c77c2);
  background-size: 100% 100%;
  background-position: center top;
}

.logo-compact2 {
  display: flex;
  position: absolute;
  top: 5px;
  left: 2px;
}

.t-gtad1 {
  fill: linearGradient1;
}

@keyframes linearGradient1 {
  0% {
    background: linear-gradient(180deg, #ffffff, #ffd5f4);
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 900px) {
  *,
  .medium {
    font-size: 85%;
  }

  v-sheet {
    max-height: 150px !important;
  }
}

@media screen and (max-width: 600px) {
  *,
  .medium {
    font-size: 75%;
  }

  v-sheet {
    max-height: 125px !important;
  }
}
</style>

<script>
export default {
  name: "SimpleLayout",

  head() {
    return {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        },
        {
          ref: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
        { ref: "stylesheet", href: "https://materialdesignicons.com/icon" }
      ]
    };
  },

  computed: {
    IS_AUTHENTICAATED() {
      return this.$store.getters.IS_AUTHENTICAATED;
    },
    uid() {
      return this.$store.state.uid;
    }
  }
};
</script>
