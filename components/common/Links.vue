<template>
  <aside>
    <a href="https://kkeisuke.com" target="_blank" class="mr-1" rel="noopener noreferrer">
      <SvgIcon icon="home" class="w-5 h-5" />
    </a>
    <a href="https://github.com/kkeisuke" target="_blank" class="mr-1" rel="noopener noreferrer">
      <SvgIcon icon="github" class="w-5 h-5" />
    </a>
    <a href="https://twitter.com/kkeisuke" target="_blank" rel="noopener noreferrer">
      <SvgIcon icon="twitter" class="w-5 h-5" />
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
