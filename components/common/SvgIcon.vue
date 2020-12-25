<template>
  <svg v-bind="$attrs" class="inline-block text-gray-700">
    <use :xlink:href="src" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    src(): string {
      return `${require(`@/assets/icons/${this.icon}.svg`)}#icon`
    }
  }
})
</script>
