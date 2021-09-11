<template>
  <aside class="flex items-center gap-2">
    <a href="https://kkeisuke.com" target="_blank" rel="noopener noreferrer" aria-label="home">
      <SvgIcon icon="home" class="w-6 h-6" />
    </a>
    <a href="https://github.com/kkeisuke" target="_blank" rel="noopener noreferrer" aria-label="github">
      <SvgIcon icon="github" class="w-6 h-6" />
    </a>
    <a href="https://twitter.com/kkeisuke" target="_blank" rel="noopener noreferrer" aria-label="twitter">
      <SvgIcon icon="twitter" class="w-6 h-6" />
    </a>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

export default Vue.extend({
  components: {
    SvgIcon
  }
})
</script>
