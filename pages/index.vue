<template>
  <main>
    <BlogTitle :title="title" class="mb-4" />
    <Links />
    <ArticleList v-for="article in articles" :key="article.path" :article="article" class="mt-8" />
    <aside class="pt-24">
      <p>2019年以前は <a href="https://kkeisuke.hatenablog.com/archive" target="_blank" rel="noopener noreferrer">はてなブログ</a> へ</p>
    </aside>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import type { MetaInfo } from 'vue-meta'

import Links from '@/components/common/Links.vue'
import BlogTitle from '@/components/index/BlogTitle.vue'
import ArticleList from '@/components/index/ArticleList.vue'

type Data = {
  title: string
  articles: IContentDocument[]
}

export default Vue.extend({
  components: {
    Links,
    BlogTitle,
    ArticleList
  },
  async asyncData({ $content }): Promise<Data> {
    const articles = await $content('articles').sortBy('date', 'desc').fetch()

    return {
      title: String(process.env.title),
      articles: Array.isArray(articles) ? articles : [articles]
    }
  },
  data(): Data {
    return {
      title: '',
      articles: []
    }
  },
  head(): MetaInfo {
    return {
      title: this.title,
      titleTemplate: '%s'
    }
  }
})
</script>
