<template>
  <theme-data>
    <button
      slot-scope="{ buttonEvents, isDarkTheme }"
      v-on="buttonEvents"
      type="button"
    >
      <Moon v-if="isDarkTheme" class="text-default h-6" />
      <Sun v-else class="text-default h-6" />
    </button>
  </theme-data>
</template>

<script lang="ts">
import Vue from 'vue'

import Moon from '@/components/svg/Moon.vue'
import Sun from '@/components/svg/Sun.vue'
import ThemeData from '@/components/data/Theme.vue'

export default Vue.extend({
  name: 'ThemeSwitcher',

  components: {
    Moon,
    Sun,
    ThemeData,
  },
})
</script>
