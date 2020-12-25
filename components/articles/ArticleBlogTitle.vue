<template>
  <h1 class="text-xl">
    <nuxt-link to="/" class="text-current no-underline">{{ title }}</nuxt-link>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
