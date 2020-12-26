<template>
  <main>
    <ArticleBlogTitle :title="title" class="mb-10" />
    <article>
      <ArticleHeader :title="articleTitle" :date="date" class="mb-10" />
      <nuxt-content :document="article" />
    </article>
    <Links class="pt-4" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { MetaInfo } from 'vue-meta'

import Links from '@/components/common/Links.vue'
import ArticleBlogTitle from '@/components/articles/ArticleBlogTitle.vue'
import ArticleHeader from '@/components/articles/ArticleHeader.vue'

type Data = {
  title: string
  articleTitle: string
  date: string
  article: IContentDocument | null
}

export default Vue.extend({
  components: {
    Links,
    ArticleBlogTitle,
    ArticleHeader
  },
  async asyncData({ $content, params }): Promise<Data> {
    const data = await $content('articles', params.slug).fetch()
    const article = Array.isArray(data) ? data[0] : data

    return {
      title: String(process.env.title),
      articleTitle: article.title,
      date: article.date,
      article
    }
  },
  data(): Data {
    return {
      title: '',
      articleTitle: '',
      date: '',
      article: null
    }
  },
  head(): MetaInfo {
    return {
      title: this.articleTitle
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/css/markdown.scss';
</style>
