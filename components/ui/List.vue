<template>
  <ul class="list-reset">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'List',
})
</script>
