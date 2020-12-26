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
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
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

@Component({
  components: {
    Links,
    ArticleBlogTitle,
    ArticleHeader
  }
})
export default class extends Vue implements Data {
  title = ''
  articleTitle = ''
  date = ''
  article = null

  async asyncData({ $content, params }: Context): Promise<Data> {
    const data = await $content('articles', params.slug).fetch()
    const article = Array.isArray(data) ? null : data

    return {
      title: String(process.env.title),
      articleTitle: article?.title || '',
      date: article?.date || '',
      article
    }
  }

  head(): MetaInfo {
    return {
      title: this.articleTitle
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/markdown.scss';
</style>
