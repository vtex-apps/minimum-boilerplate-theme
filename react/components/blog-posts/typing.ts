export interface CategoryPostProps {
  id: number
  name: string
  link: string
}

export interface WpPostProps {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: number[]
  yoast_head: string
  yoast_head_json: YoastHeadJson
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  footnotes: string
}

export interface YoastHeadJson {
  title: string
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  article_publisher: string
  article_published_time: string
  article_modified_time: string
  og_image: OgImage[]
  author: string
  twitter_card: string
  twitter_creator: string
  twitter_site: string
  twitter_misc: TwitterMisc
  schema: Schema
}

export interface Robots {
  index: string
  follow: string
  'max-snippet': string
  'max-image-preview': string
  'max-video-preview': string
}

export interface OgImage {
  width: number
  height: number
  url: string
  type: string
}

export interface TwitterMisc {
  'Escrito por': string
  'Est. tempo de leitura': string
}

export interface Schema {
  '@context': string
  '@graph': Graph[]
}

export interface Graph {
  '@type': string
  '@id': string
  isPartOf?: IsPartOf
  author?: Author
  headline?: string
  datePublished?: string
  dateModified?: string
  mainEntityOfPage?: MainEntityOfPage
  wordCount?: number
  commentCount?: number
  publisher?: Publisher
  image?: Image
  thumbnailUrl?: string
  keywords?: string[]
  articleSection?: string[]
  inLanguage?: string
  potentialAction?: PotentialAction[]
  url?: string
  name?: string
  primaryImageOfPage?: PrimaryImageOfPage
  breadcrumb?: Breadcrumb
  contentUrl?: string
  width?: number
  height?: number
  itemListElement?: ItemListElement[]
  description?: string
  logo?: Logo
  sameAs?: string[]
}

export interface IsPartOf {
  '@id': string
}

export interface Author {
  name: string
  '@id': string
}

export interface MainEntityOfPage {
  '@id': string
}

export interface Publisher {
  '@id': string
}

export interface Image {
  '@type'?: string
  inLanguage?: string
  '@id': string
  url?: string
  contentUrl?: string
  caption?: string
}

export interface PotentialAction {
  '@type': string
  target: any
  'query-input'?: string
  name?: string
}

export interface PrimaryImageOfPage {
  '@id': string
}

export interface Breadcrumb {
  '@id': string
}

export interface ItemListElement {
  '@type': string
  position: number
  name: string
  item?: string
}

export interface Logo {
  '@type': string
  inLanguage: string
  '@id': string
  url: string
  contentUrl: string
  width: number
  height: number
  caption: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author2[]
  replies: Reply[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  'wp:featuredmedia': Featuredmedum[]
  'wp:attachment': WpAttachment[]
  'wp:term': WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author2 {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface Featuredmedum {
  embeddable: boolean
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}
