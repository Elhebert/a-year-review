<script lang="ts">
import Vue from 'vue'

import reviews from '@/static/reviews.json'

export default Vue.extend({
  name: 'Reviews',

  data: () => ({
    reviews,
  }),

  render() {
    return this.$scopedSlots.default!({
      reviews: this.reviews,
    }) as any
  },
})
</script>
