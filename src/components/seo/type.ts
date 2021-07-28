export type SeoProps = {
  lang?: string,
  meta?: (MetaType|MetaPropertyType)[],
  author?: string,
  title?: string,
  img?: string,
  path: string,
  description?: string,
}

export type MetaType = {
  name: string,
  content: string,
}

export type MetaPropertyType = {
  property: string,
  content: string,
}
