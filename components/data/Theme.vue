<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeData',

  data: () => ({
    isDarkTheme: false,
  }),

  mounted() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    mq.addListener(e => {
      if (!e) {
        return
      }

      if (this.isDarkTheme !== e.matches) {
        this.switchTheme()
      }

      this.isDarkTheme = e.matches
    })
  },

  methods: {
    switchTheme(): void {
      this.isDarkTheme = !this.isDarkTheme
      document.body.classList.toggle('dark-mode')
    },
  },

  render() {
    return this.$scopedSlots.default!({
      isDarkTheme: this.isDarkTheme,
      buttonEvents: {
        click: () => this.switchTheme(),
      },
    }) as any
  },
})
</script>
