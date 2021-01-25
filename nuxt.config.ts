import { NuxtConfig } from '@nuxt/types'
import { $content } from '@nuxt/content'

const title = 'kkeisuke blog'
const url = 'https://blog.kkeisuke.com'

export default {
  env: {
    title,
    url
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: `%s - ${title}`,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: title },
      // { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogDescription', property: 'og:description', content: title },
      { hid: 'ogType', property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${url}/profile.png` },
      { hid: 'ogUrl', property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@kkeisuke' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false, // 一旦 Off
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  },

  sitemap: {
    hostname: 'https://blog.kkeisuke.com',
    routes: async () => {
      const articles = await $content('articles').only(['path']).fetch()
      if (Array.isArray(articles)) {
        return articles.map((article) => article.path)
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module?.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
} as NuxtConfig
