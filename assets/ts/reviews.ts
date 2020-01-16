import { ref, Ref, onBeforeMount } from '@vue/composition-api'

const currentYear = Number.parseInt(process.env.currentYear as string)

export type Review = {
  author: string
  link: string
}

const getReviews = async (year: Number): Promise<Review[]> => {
  let file = 'reviews.json'

  if (year !== currentYear) {
    file = `${year}.${file}`
  }

  const reviews: Review[] = await import(`@/static/${file}`)

  return reviews
}

export default (year: Number = currentYear) => {
  const reviews: Ref<Review[]> = ref([])

  onBeforeMount(async () => {
    reviews.value = await getReviews(year)
  })

  return reviews
}
