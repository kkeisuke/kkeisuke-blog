<template>
  <header>
    <h2 class="mb-1 text-3xl xl:text-4xl leading-tight">{{ title }}</h2>
    <time class="text-xs">{{ date }}</time>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
})
</script>
