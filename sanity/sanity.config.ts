import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dailyarticles',
  projectId: process.env.SANITY_PROJECT_ID || 'x6apaaxw', // fallback hardcoded
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
