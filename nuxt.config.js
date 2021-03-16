export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TextGuru',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/_colors.scss',
    '@/assets/css/_typography.scss',
    '@/assets/css/_main.scss',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/ckeditor5-vue2", mode: "client" }, { src: '@/plugins/aos.js', mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCCk58egv6pVZbTLx_yeaNKBOhu9iUGQss",
          authDomain: "textguru-da272.firebaseapp.com",
          projectId: "textguru-da272",
          storageBucket: "textguru-da272.appspot.com",
          messagingSenderId: "647462945512",
          appId: "1:647462945512:web:b66b6dfac175d0657a7f5d",
          measurementId: "G-58G9S3YJVT"
        },
        services: {
          auth: {
            persistence: 'session',
            initialize: {
              subscribeManually: false
            },
            ssr: false, // default
          },
          storage: true,
          firestore: true,
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', "tiptap-vuetify"]
  },
}
