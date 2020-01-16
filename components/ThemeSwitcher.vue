<template>
  <button v-on="buttonEvents" type="button">
    <Moon v-if="isDarkTheme" class="text-default h-6" />
    <Sun v-else class="text-default h-6" />
  </button>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import themeSwitcher from '@/assets/ts/theme.ts'
import Moon from '@/components/svg/Moon.vue'
import Sun from '@/components/svg/Sun.vue'

export default createComponent({
  name: 'ThemeSwitcher',

  components: {
    Moon,
    Sun,
  },

  setup() {
    return themeSwitcher()
  },
})
</script>
