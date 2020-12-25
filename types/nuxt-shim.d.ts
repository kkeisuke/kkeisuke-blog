import { IContentDocument } from '@nuxt/content/types/content'

declare module '@nuxt/content/types/content' {
  interface IContentDocument {
    title: string
    description: string
    date: string
  }
}
