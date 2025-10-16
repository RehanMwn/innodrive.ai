import { boot } from 'quasar/wrappers'
import QMarkdownPlugin from '@quasar/quasar-ui-qmarkdown'
import '@quasar/quasar-ui-qmarkdown/dist/index.css'
import type { Plugin } from 'vue'

export default boot(({ app }) => {
  // Tambahkan 'as any' agar TypeScript tidak error
  app.use(QMarkdownPlugin as unknown as Plugin)
})
