// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt-alt/auth',"@pinia/nuxt"
  ],
  auth: {
    globalMiddleware: true,
    redirect: {
      login: "/",
      home: "/",
      callback: "/"
    },
    strategies: {
      discord: {
        clientId: 'XXXXXXXXXXXXXXXXXXXXXX',
        clientSecret: 'XXXXXXXXXXXXXXXXXXXXXX'
      },
    }
  }
})
