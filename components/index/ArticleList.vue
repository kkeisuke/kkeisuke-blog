<template>
  <article>
    <time class="text-xs">{{ article.date }}</time>
    <h2 class="text-xl">
      <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
    </h2>
    <p class="text-sm">{{ article.description }}</p>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  props: {
    article: {
      type: Object as PropType<IContentDocument>,
      required: true
    }
  }
})
</script>
