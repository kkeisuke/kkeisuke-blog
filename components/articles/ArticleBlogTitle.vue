<template>
  <h1 class="flex justify-between">
    <nuxt-link to="/" class="text-xl text-current no-underline">{{ title }}</nuxt-link>
    <Links class="transform scale-75" />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Links from '@/components/common/Links.vue'

export default Vue.extend({
  components: {
    Links
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
