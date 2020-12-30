<template>
  <figure class="pb-8 flex flex-col justify-center items-center">
    <img :src="src" :title="title" :alt="title" :width="width" :height="height" loading="lazy" />
    <figcaption class="mt-3 block w-full text-xs text-gray-700 text-center">{{ title }}</figcaption>
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
