import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'dailyarticles',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',

  plugins: [structureTool()], // Make sure visionTool() is GONE from here

  schema: {
    types: schemaTypes,
  },
})