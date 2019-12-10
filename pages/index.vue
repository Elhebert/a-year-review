<template>
  <main class="container max-w-2xl mx-auto flex-grow px-2">
    <div class="p-4 shadow-md text-jumbo bg-dimmed">
      <strong class="text-default">Is someone's retrospective missing?</strong>
      <br />
      To add a link to the list, update the
      <a-link
        href="https://github.com/Elhebert/a-yearly-review/blob/master/static/reviews.json"
      >
        <code class="text-base">reviews.json</code>
      </a-link>
      file and make a PR.
    </div>

    <reviews-data>
      <list slot-scope="{ reviews }" class="my-16">
        <list-item v-for="review in reviews" :key="review.name">
          <a-link :href="review.link" class="text-3xl">
            {{ review.author }}
          </a-link>
        </list-item>
      </list>
    </reviews-data>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import ALink from '@/components/ui/ALink.vue'
import List from '@/components/ui/List.vue'
import ListItem from '@/components/ui/ListItem.vue'
import ReviewsData from '@/components/Data/Reviews.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    ALink,
    List,
    ListItem,
    ReviewsData,
  },
})
</script>
