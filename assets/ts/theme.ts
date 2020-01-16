import { onMounted, ref, Ref, computed } from '@vue/composition-api'

export default () => {
  const isDarkTheme: Ref<boolean> = ref(false)
  const themes = {
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  }

  const test = computed(() => isDarkTheme)

  const switchTheme = (): void => {
    setTheme(isDarkTheme.value ? 'light' : 'dark')
  }

  const setTheme = (theme: string): void => {
    isDarkTheme.value = theme === 'dark'

    document.body.setAttribute('data-theme', theme)
  }

  const themeListener = (event: MediaQueryListEvent): void => {
    Object.entries(themes).forEach(([theme, mediaQuery]) => {
      if (event.media === mediaQuery) {
        setTheme(theme)
      }
    })
  }

  const initThemeSwitcher = (): void => {
    Object.entries(themes).forEach(([theme, mediaQuery]) => {
      const mq: MediaQueryList = window.matchMedia(mediaQuery)
      mq.addListener(themeListener)

      if (mq.matches) {
        setTheme(theme)
      }
    })
  }

  onMounted(() => {
    initThemeSwitcher()
  })

  return {
    isDarkTheme,
    buttonEvents: {
      click: () => switchTheme(),
    },
    test,
  }
}
