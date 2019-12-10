<template>
  <li class="my-2">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListItem',
})
</script>
