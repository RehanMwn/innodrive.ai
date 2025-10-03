import { ref, computed } from 'vue'

export interface NewsItem {
  id: number
  category: string
  title: string
  desc: string
  image: string
}

export const categories = ['Latest', 'Company', 'Product', 'Project']
export const activeCategory = ref('Latest')
export const search = ref('')
export const page = ref(1)
export const perPage = 8

export const posts = ref<NewsItem[]>([
  {
    id: 1,
    category: 'Company',
    title: 'The Innodrive.ai Journey: News, Growth, and Innovation',
    desc: 'Discover the stories from Innodrive.ai — covering our milestones, innovations, and our journey forward.',
    image: '/images/news1.jpg'
  },
  {
    id: 2,
    category: 'Project',
    title: "Transforming Industries Through Innodrive.ai's Project Innovations",
    desc: 'Explore how Innodrive.ai projects bring digital transformation to life, driving smarter, more efficient industries.',
    image: '/images/news2.jpg'
  },
  {
    id: 3,
    category: 'Product',
    title: 'Innovating Automotive Testing: Discover the Power of Dynomax',
    desc: 'Discover how Dynomax delivers precise, reliable testing for smarter automotive development.',
    image: '/images/news3.jpg'
  },
  {
    id: 4,
    category: 'Company',
    title: 'The Innodrive.ai Journey: News, Growth, and Innovation',
    desc: 'Discover the stories from Innodrive.ai — covering our milestones, innovations, and our journey forward.',
    image: '/images/news4.jpg'
  },
  {
    id: 5,
    category: 'Company',
    title: 'Innodrive.ai Expands Global Presence with New Offices in Europe and Asia',
    desc: 'Strengthening our commitment to innovation and customer support worldwide.',
    image: '/images/news5.jpg'
  },
  {
    id: 6,
    category: 'Product',
    title: 'Introducing the Next Generation of Vehicle Testing Solutions',
    desc: 'Enhancing accuracy and efficiency in automotive testing with our latest innovations.',
    image: '/images/news6.jpg'
  },
  {
    id: 7,
    category: 'Project',
    title: 'Case Study: How Innodrive.ai Helped a Leading Manufacturer Reduce Downtime by 30%',
    desc: 'Discover the strategies and technologies that drove significant improvements.',
    image: '/images/news7.jpg'
  },
  {
    id: 8,
    category: 'Company',
    title: 'Innodrive.ai Partners with Major Tech Firms to Advance Automotive AI Research',
    desc: 'Collaborating to push the boundaries of AI in the automotive industry.',
    image: '/images/news8.jpg'
  },
  {
    id: 9,
    category: 'Product',
    title: 'Revolutionizing Testing with AI-Driven Tools',
    desc: 'How artificial intelligence is reshaping the automotive testing landscape.',
    image: '/images/news9.jpg'
  }
])

// === Filtering ===
export const filteredPosts = computed(() => {
  let result = posts.value

  if (activeCategory.value !== 'Latest') {
    result = result.filter(post => post.category === activeCategory.value)
  } else {
    result = [...result].sort((a, b) => b.id - a.id)
  }

  if (search.value) {
    result = result.filter(post =>
      post.title.toLowerCase().includes(search.value.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.value.toLowerCase())
    )
  }

  return result
})

// === Pagination ===
export const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / perPage)
)

export const paginatedPosts = computed(() => {
  const start = (page.value - 1) * perPage
  const end = start + perPage
  return filteredPosts.value.slice(start, end)
})

// === Search Suggestions / Autocomplete ===
export const searchSuggestions = ref<string[]>([])

export function filterSearch(val: string, update: (callback: () => void) => void) {
  update(() => {
    if (val === '') {
      searchSuggestions.value = posts.value.map(p => p.title)
    } else {
      const needle = val.toLowerCase()
      searchSuggestions.value = posts.value
        .filter(
          p =>
            p.title.toLowerCase().includes(needle) ||
            p.desc.toLowerCase().includes(needle)
        )
        .map(p => p.title)
    }
  })
}
