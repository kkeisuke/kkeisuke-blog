<template>
  <figure class="pb-6 flex justify-center items-center">
    <img :src="src" :title="title" :alt="title" :width="width" :height="height" loading="lazy" />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 'auto'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    }
  }
})
</script>
