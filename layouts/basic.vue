<template>
  <v-app>
    <!-- Side menu. -->
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      fixed
      class="bg9"
      max-width="300px"
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          dense
          router
          :to="item.to"
        >
          <v-list-item-title align="start" class="medium">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="d-block px-3 text-center justify-center">
          <v-btn
            v-if="!IS_AUTHENTICATED"
            color="ghostwhite"
            class="medium mx-auto"
            max-width="260px"
            light
            rounded
            block
            dense
            nuxt
            to="/login"
          >
            <v-icon color="primary">
              mdi-login
            </v-icon>
            <span class="medium ml-1 t-pink1">
              เข้าสู่ระบบ
            </span>
          </v-btn>
          <v-btn
            v-if="IS_AUTHENTICATED"
            color="black"
            class="medium mx-auto"
            max-width="260px"
            dark
            rounded
            block
            dense
            @click="logout()"
          >
            <v-icon color="accent">
              mdi-logout
            </v-icon>
            <span class="medium ml-1 t-pink2">
              ออกจากระบบ
            </span>
          </v-btn>
          <br />
          <v-btn
            color="ghostwhite"
            class="small mx-auto mb-1"
            dark
            text
            block
            dense
          >
            <small class="small">
              &copy;2023 FS-EXCHANGER
            </small>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- Content -->
    <v-main class="bg-white">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- Bottom menu. -->
    <v-card
      app
      dark
      class="grad10 bottom pa-1"
      width="100%"
      height="auto"
      elevation="15"
      tile
    >
      <v-card-actions
        class="d-flex align-center justify-center text-center py-0 px-sm-1 px-md-2 px-lg-3 px-xl-3 transparent"
      >
        <v-spacer />
        <v-btn
          v-for="bMenu in bMenus"
          :key="bMenu.id"
          color="transparent"
          :class="bMenu.class"
          :title="bMenu.title"
          width="auto"
          :height="$vuetify.breakpoint.smAndDown ? '57.5px' : '60px'"
          elevation="0"
          dark
          link
          router
          :to="bMenu.route"
        >
          <span
            class="d-block mx-auto pa-2 justify-center align-center text-center"
          >
            <v-icon
              class="t-white mx-auto mb-1"
              :small="$vuetify.breakpoint.smAndDown"
            >
              {{ bMenu.icon }}
            </v-icon>
            <br />
            {{ bMenu.title }}
            <span
              v-if="bMenu.id === '5' && newCount > 0"
              class="d-flex pa-1 red small white--text align-center text-center"
              style="position: absolute; top: 3.5px; left: 51%; width: auto; height: auto; max-height: 18px; border-radius: 50%"
            >
              {{ newCount }}
            </span>
          </span>
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <!-- Top menu. -->
    <v-card
      app
      dark
      class="top grad11 pa-1"
      elevation="12"
      width="100%"
      height="auto"
      tile
    >
      <v-app-bar dark tile dense color="transparent" elevation="0" class="pa-1">
        <v-app-bar-nav-icon
          :small="$vuetify.breakpoint.smAndDown"
          class="mt-0 ml-0 mb-auto mr-sm-3 mr-md-auto mr-lg-auto mr-xl-auto"
          @click.stop="drawer = !drawer"
        />
        <v-spacer />
        <v-toolbar-title
          class="d-flex flex pa-1 mt-0 mb-1 mx-auto medium pointer"
          style="width: auto; max-width: 165px"
        >
          <v-img alt="Logo svg" :src="logo" sizes="auto" class="ma-1"></v-img>
        </v-toolbar-title>
        <v-spacer />
        <div class="mx-sm-2 mx-md-3 mx-lg-3 mx-xl-4"></div>
      </v-app-bar>
      <v-card-actions
        class="d-flex flex align-center justify-center text-center pa-1 mt-0 mb-1 mx-auto grad9 shadow"
      >
        <v-spacer />
        <v-btn
          v-for="(mItem, i) in mItems"
          :key="i"
          :class="mItem.class"
          :title="mItem.title"
          color="transparent"
          width="auto"
          :height="$vuetify.breakpoint.smAndDown ? '55px' : '60px'"
          dark
          depressed
          link
          router
          :to="mItem.route"
        >
          <span
            class="d-block ma-auto pa-1 justify-center align-center text-center t-white medium"
          >
            <v-icon
              class="t-white mx-auto mb-1"
              :small="$vuetify.breakpoint.smAndDown"
            >
              {{ mItem.icon }}
            </v-icon>
            <br />
            {{ mItem.title }}
          </span>
        </v-btn>
        <v-spacer />
      </v-card-actions>
      <v-speed-dial
        v-model="fab"
        class="mr-0 mt-0"
        :direction="direction"
        :transition="transition"
        absolute
        fixed
        top
        right
      >
        <template #activator>
          <v-btn
            v-model="fab"
            color="transparent"
            class="d-flex flex rounded-r-0 align-center text-center grad4 t-white t-shadow text-button"
            max-width="58px"
            height="44px"
            dark
            small
          >
            <v-icon v-if="fab">
              mdi-close
            </v-icon>
            <span v-else class="t-white t-shadow text-button">
              แชท
            </span>
          </v-btn>
        </template>
        <v-btn
          v-for="(speedItem, i) in speedItems"
          :key="i"
          :color="speedItem.color"
          elevation="14"
          dark
          fab
          small
          :href="speedItem.link"
        >
          <v-icon>
            {{ speedItem.icon }}
          </v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </v-app>
</template>

<style>
@font-face {
  src: url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
  font-family: "Roboto", "sans-serif";
  font-feature-settings: normal;
  -moz-font-feature-settings: normal;
  -webkit-font-feature-settings: normal;
  -o-font-feature-settings: normal;
}

/* Globals */
*,
html {
  box-sizing: border-box;
}

*,
html,
body,
template {
  line-height: 1.5;
  font-family: "Roboto", monospace;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.0178571429em;
  word-spacing: normal;
  word-wrap: break-word;
  font-size-adjust: none;
  font-feature-settings: normal;
  -moz-font-feature-settings: normal;
  -webkit-font-feature-settings: normal;
  -o-font-feature-settings: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  top: 76px;
}

.absolute-right {
  position: fixed;
  top: 76px;
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
  z-index: 1;
}

.pointer {
  cursor: pointer;
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
[value],
input,
input[label],
input::placeholder,
v-text-field,
v-text-field::placeholder,
v-text-field::-ms-value,
v-text-field[label],
v-text-field[value],
v-text-field[option],
v-text-field::after,
v-text-field:below-level,
v-autocomplete,
v-autocomplete[label],
v-autocomplete::after,
v-autocomplete::selection,
v-autocomplete::placeholder,
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
  text-justify: auto;
}

.bg4 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439353/public/svg/bg4_f33lc3.svg")
    repeat-x center top;
}

.bg6 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689237872/public/svg/bg6.svg")
    repeat-x left top;
}

.bg8 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690097207/public/svg/bg8_vbrp61.svg")
    repeat-x center top;
}

.bg9 {
  background-size: contain;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689159993/public/svg/bg9.svg")
    repeat-x left top;
}

.bg11 {
  background-size: contain;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690051131/public/svg/bg11_vnhmuu.svg")
    repeat-x left top;
}

.bg12 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690051131/public/svg/bg12_wnd2zl.svg")
    repeat-x left top;
}

.bg13 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689256266/public/svg/bg13.svg")
    no-repeat center center;
}

.bg10-2 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689160831/public/svg/bg10-2.svg")
    no-repeat center center;
}

.background {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689237872/public/svg/background.svg")
    no-repeat fixed center top;
}

.bg-animate {
  background-size: 100% 100%;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1691534265/public/svg/bg-animate.svg")
    no-repeat fixed center center;
}

.bg-animate-light {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1692065766/public/svg/bg-animate-light_jximlj.svg")
    no-repeat fixed center top;
}

.bg-animate3 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1692064592/public/svg/bg-animate2.svg")
    no-repeat fixed center top;
}

.bg-dialog {
  background-size: 100% 100%;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1688640542/public/web/bg300-44_grzih3.jpg")
    no-repeat left top;
}

.bg-dialog1 {
  background-size: 100% 100%;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1690787838/public/web/LINE_P20190113_154935282_5_nc3gyj.jpg")
    no-repeat center top;
}

.btn-left2 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439354/public/svg/btn-left2.svg")
    no-repeat center left;
}

.btn-right2 {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439203/public/svg/btn-right2.svg")
    no-repeat right center;
}

.btn3 {
  background-size: cover;
  background: linear-gradient(0deg, #8e0369ff, #5b1038ff) no-repeat center
    center;
}

.blue-pp {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/blue-pp_etvuhf.svg")
    no-repeat center top;
}

.blue-wm {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/blue-wm_mo344u.svg")
    no-repeat center top;
}

.red-pm {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/red-pm_tgtw2v.svg")
    no-repeat center top;
}

.green-nt {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/green-nt_zbmo4x.svg")
    no-repeat center top;
}

.purple-sk {
  background-size: cover;
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687785741/public/svg/purple-sk_qvoroy.svg")
    no-repeat center top;
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

.grad1 {
  background-size: 100% 100%;
  background: linear-gradient(180deg, #ffffff, #e1a5d1) center top;
}

.grad2 {
  background-size: 100% 100%;
  background: linear-gradient(180deg, #e002a5, #982278) center top;
}

.grad3 {
  background-size: 100% 100%;
  background: linear-gradient(270deg, #e1a5d11a, #e002a5) left center;
}

.grad4 {
  background-size: 100% 100%;
  background: linear-gradient(90deg, #e1a5d11a, #e002a5) right center;
}

.grad5 {
  background-size: 100% 100%;
  background: radial-gradient(at top, #e1a5d1, #88286e) center top;
}

.grad6 {
  background-size: 100% 100%;
  background: radial-gradient(#e002a5, #e1a5d1) center center;
}

.grad7 {
  background-size: 100% 100%;
  background: linear-gradient(0deg, #521943c0, #932c77c2) center top;
}

.grad8 {
  background-size: 100% 100%;
  background: linear-gradient(0deg, #f700b6, #88286e) no-repeat center top;
}

.grad9 {
  background-size: 100% 100%;
  background: linear-gradient(180deg, #f700b6, #88286e) no-repeat center top;
}

.grad10 {
  background-size: 100% 100%;
  background: linear-gradient(180deg, #db2bad, #2c0b25) repeat-x center bottom;
}

.grad11 {
  background-size: 100% 100%;
  background: linear-gradient(0deg, #db2bad, #2c0b25) no-repeat center top;
}

.logo-compact2 {
  display: flex;
  position: absolute;
  top: 5px;
  left: 2px;
}

.btn1 {
  background-size: 100% 100%;
  background: radial-gradient(at center, #ffffff, ghostwhite) no-repeat center
    center;
}

.btn2 {
  background-size: 100% 100%;
  background: radial-gradient(at center, #521943, #932c77) no-repeat center
    center;
}

.btn2-2 {
  background-size: 100% 100%;
  background: radial-gradient(at center, #521943c0, #932c77c2) no-repeat center
    center;
}

/* Text and Borders */
.t-transparent {
  color: transparent !important;
}

.t-text {
  font-family: "Roboto", sans-serif;
  font-size: 0.655rem !important;
  letter-spacing: 0.0178571429em;
}

.x-small {
  font-family: "Roboto", "monospace";
  font-weight: bolder;
  font-size: 0.567rem !important;
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

.t-table {
  font-family: "Droid Sans", "monospace";
  font-size: 0.7555rem !important;
  font-weight: bolder;
  letter-spacing: 0.0178571429em;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.t-white {
  color: #ffffff !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.t-light {
  color: #655d62 !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;
}

.t-light2 {
  color: #777777 !important;
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
  border-top: 1px groove #ffd5f4;
  border-bottom: 1px groove #ffd5f4;
}

.shadow {
  box-shadow: 0px 3px 10px #433c40;
}

.bd-pp {
  border-top: 1px double #0072b5 !important;
  border-right: 1px double #0072b5 !important;
  border-bottom: 1px double #0072b5 !important;
  border-left: 1px double #0072b5 !important;
}

.bd-wm {
  border-top: 1px double #34568b !important;
  border-right: 1px double #34568b !important;
  border-bottom: 1px double #34568b !important;
  border-left: 1px double #34568b !important;
}

.bd-pm {
  border-top: 1px double #ec3434 !important;
  border-right: 1px double #ec3434 !important;
  border-bottom: 1px double #ec3434 !important;
  border-left: 1px double #ec3434 !important;
}

.bd-nt {
  border-top: 1px double #017b01 !important;
  border-right: 1px double #017b01 !important;
  border-bottom: 1px double #017b01 !important;
  border-left: 1px double #017b01 !important;
}

.bd-sk {
  border-top: 1px double #d46187 !important;
  border-right: 1px double #d46187 !important;
  border-bottom: 1px double #d46187 !important;
  border-left: 1px double #d46187 !important;
}

.bd-line {
  border-top: 1px double #00b900 !important;
  border-right: 1px double #00b900 !important;
  border-bottom: 1px double #00b900 !important;
  border-left: 1px double #00b900 !important;
}

.bd-tmn {
  border-top: 1px double #ff7700 !important;
  border-right: 1px double #ff7700 !important;
  border-bottom: 1px double #ff7700 !important;
  border-left: 1px double #ff7700 !important;
}

.bd-pink4 {
  border-top: 1px double #f700b6 !important;
  border-right: 1px double #f700b6 !important;
  border-bottom: 1px double #f700b6 !important;
  border-left: 1px double #f700b6 !important;
}

.grad-pp {
  background-size: 100% 100%;
  background: radial-gradient(#0072b5, #001925);
}

.grad-wm {
  background-size: 100% 100%;
  background: radial-gradient(#34568b, #011138);
}

.grad-pm {
  background-size: 100% 100%;
  background: radial-gradient(#dd2512, #910231);
}

.grad-nt {
  background-size: 100% 100%;
  background: radial-gradient(#008000, #0b3e01);
}

.grad-sk {
  background-size: 100% 100%;
  background: radial-gradient(#d2386c, #81134d);
}

@media screen and (max-width: 900px) {
  *,
  .medium {
    font-size: 85%;
  }

  .t-table {
    font-size: 83.5%;
  }
}

@media screen and (max-width: 600px) {
  *,
  .medium {
    font-size: 75%;
  }

  .t-table {
    font-size: 75%;
  }
}
</style>

<script>
import { auth } from "~/plugins/firebase-init";

export default {
  name: "BasicLayout",

  head() {
    return {
      meta: [
        { charset: "utf-8" },
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

  data() {
    return {
      drawer: true,
      logo:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1688924150/public/svg/logo2_wemlba.svg",
      items: [
        { title: "หน้าหลัก", to: "/" },
        { title: "เกี่ยวกับเรา", to: "/about" },
        { title: "นโยบายความเป็นส่วนตัว", to: "/policies/privacy" },
        { title: "ข้อกำหนดในการให้บริการ", to: "/policies/tos" },
        { title: "ข้อกำหนดในการใช้งาน", to: "/policies/tou" },
        { title: "ข้อกำหนดและเงื่อนไข", to: "/policies/tac" },
        { title: "แหล่งที่มา", to: "/policies/attrs" },
        { title: "ข้อมูลอ้างอิง", to: "/policies/refers" }
      ],
      mItems: [
        {
          title: "หน้าหลัก",
          icon: "mdi-home",
          class:
            "d-flex flex ml-auto mr-0 my-1 py-1 align-center text-center transparent medium",
          route: "/"
        },
        {
          title: "อัตราแลกเปลี่ยน",
          icon: "mdi-currency-usd",
          class:
            "d-flex flex mx-0 my-1 py-1 align-center text-center transparent medium",
          route: "/currencies"
        },
        {
          title: "วิธีซื้อขาย",
          icon: "mdi-help-box",
          class:
            "d-flex flex ml-0 mr-auto my-1 py-1 align-center text-center transparent medium",
          route: "/guides"
        }
      ],
      bMenus: [],
      fab: false,
      direction: "bottom",
      transition: "slide-y-reverse-transition",
      speedItems: [
        {
          color: "success",
          link: "#",
          icon: "mdi-chat"
        },
        {
          color: "#0072B5",
          link: "#",
          icon: "mdi-phone"
        },
        {
          color: "#004a75",
          link: "#",
          icon: "mdi-facebook-messenger"
        },
        {
          color: "green darken-1",
          link: "#",
          icon: "mdi-whatsapp"
        },
        {
          color: "blue darken-3",
          link: "#",
          icon: "mdi-twitter"
        },
        {
          color: "blown darken-3",
          link: "#",
          icon: "mdi-email"
        }
      ],
      newMessages: false,
      newCount: 7
    };
  },

  computed: {
    IS_AUTHENTICATED() {
      return this.$store.getters.IS_AUTHENTICATED;
    },
    uid() {
      return this.$store.state.uid;
    },
    colors() {
      let color = "black";
      if (this.newCount === 0) {
        color = "yellow";
      }
      return color;
    }
  },

  mounted() {
    if (this.newCount && this.newCount > 0) {
      this.newMessages = true;
    }
  },

  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch("SET_SESSION_COOKIE", { idToken: null });
        this.$store.commit("SET_UID", null);
        this.$router.replace("/login");
      });
    }
  }
};
</script>
