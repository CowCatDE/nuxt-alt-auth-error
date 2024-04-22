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
        clientId: '1171824735676538962',
        clientSecret: 'EfDSZ1vBu1DKzbhcPaipfFH33SFIxSU7'
      },
    }
  }
})
