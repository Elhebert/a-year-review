<template>
  <main class="container max-w-2xl mx-auto flex-grow px-2">
    <div class="p-4 shadow-md text-jumbo bg-dimmed">
      <strong class="text-default">Is someone's retrospective missing?</strong>
      <br />
      To add a link to the list, update the
      <a-link :href="githubUrl">
        <code class="text-base">reviews.json</code>
      </a-link>
      file and make a PR.
    </div>

    <list class="my-16">
      <list-item v-for="review in reviews" :key="review.name">
        <a-link :href="review.link" class="text-3xl">
          {{ review.author }}
        </a-link>
      </list-item>
    </list>
  </main>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import { Context } from '@nuxt/types'

import ALink from '@/components/ui/ALink.vue'
import List from '@/components/ui/List.vue'
import ListItem from '@/components/ui/ListItem.vue'
import getReviews from '@/assets/ts/reviews.ts'

export default createComponent({
  name: 'Home',

  head() {
    return {
      title: `${this.$route.params.year} in reviews`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.$route.params.year} reviews by people in tech`,
        },
        {
          property: 'og:site_name',
          content: `${this.$route.params.year} in reviews`,
        },
      ],
    }
  },

  components: {
    ALink,
    List,
    ListItem,
  },

  setup(_: void, ctx) {
    const year = computed(() =>
      Number.parseInt(
        ctx.root.$route.params.year || (process.env.currentYear as string)
      )
    )

    const githubUrl = computed(() => {
      const url =
        'https://github.com/Elhebert/a-yearly-review/blob/master/static'
      const file = 'reviews.json'

      if (ctx.root.$route.params.year !== process.env.currentYear) {
        return `${url}/${ctx.root.$route.params.year}.${file}`
      }

      return `${url}/${file}`
    })

    return {
      year,
      githubUrl,
      reviews: getReviews(year.value),
    }
  },

  validate({ params }: Context) {
    return ['2018', '2019'].includes(params.year)
  },
})
</script>
