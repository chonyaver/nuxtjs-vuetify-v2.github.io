/* eslint-disable no-unused-vars */
require("dotenv").config();

module.exports = {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  target: "static",

  runtimeConfig: {
    public: {
      apiKey: process.env.FB_API_KEY,
      authDomain: process.env.FB_AUTH_DOMAIN,
      databaseURL: process.env.FB_RTDB_URL,
      projectId: process.env.FB_PROJECT_ID,
      storageBucket: process.env.FB_STORAGE_BUCKET,
      messagingSenderId: process.env.FB_FCM_SENDER_ID,
      appId: process.env.FB_APP_ID,
      measurementId: process.env.FB_MEASUREMENT_ID
    }
  },

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js Vuetify starter for CSB",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js Vuetify starter for CodeSandBox"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "~/plugins/axios.js" }],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    ["cookie-universal-nuxt", { parseJSON: true, fromRes: true }],
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/firebase"
  ],

  axios: {
    baseURL: process.env.BASE_URL
  },

  firebase: {
    config: {
      apiKey: process.env.FB_API_KEY,
      authDomain: process.env.FB_AUTH_DOMAIN,
      databaseURL: process.env.FB_RTDB_URL,
      projectId: process.env.FB_PROJECT_ID,
      storageBucket: process.env.FB_STORAGE_BUCKET,
      messagingSenderId: process.env.FB_FCM_SENDER_ID,
      appId: process.env.FB_APP_ID,
      measurementId: process.env.FB_MEASUREMENT_ID
    },
    services: {
      auth: {
        persistence: "none",
        ssr: false,
        ignorePaths: ["/api"]
      },
      database: true,
      storage: true,
      firestore: true,
      functions: true
    },
    onFirebaseHosting: false,
    terminateDatabasesAfterGenerate: true
  },

  env: {
    BASE_URL: process.env.BASE_URL,
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_RTDB_URL: process.env.FB_RTDB_URL,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_FCM_SENDER_ID: process.env.FB_FCM_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
  },

  // Doc: https://github.com/nuxt-community/vuetify-module
  vuetify: {
    customVariables: ["./assets/variables.scss"],
    optionsPath: "./vuetify.options.js"
  },

  dev: process.env.NODE_ENV !== "production",

  // serverMiddleware: [
  // {
  // path: "/api",
  // handler: "~/api/index.js"
  // }
  // ],

  router: {
    middleware: ["ssr-cookie"]
  },

  buildDir: ".nuxt",

  build: {
    extractCss: true,
    extend(config, ctx) {}
  }
};
