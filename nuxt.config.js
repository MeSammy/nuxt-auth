export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "jwt-auth",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  router: {
    middleware: ["clearValidationErrors"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/mixins/validation",
    "./plugins/mixins/user",
    "./plugins/axios",
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertName: "token",
          },
          user: {
            url: "me",
            method: "get",
            propertName: "data",
          },
          logout: {
            url: "auth/logout",
            method: "post",
          },
        },
      },
    },
    redirect: {
      login: "/auth/login",
      home: "/",
    },
    plugins: ["./plugins/auth"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: "http://127.0.0.1:8000/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCss: true,
  },
};
