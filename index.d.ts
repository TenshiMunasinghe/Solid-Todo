export interface YT {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items?: ItemsEntity[] | null
}
export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
export interface ItemsEntity {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}
export interface Id {
  kind: string
  videoId: string
}
export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}
export interface Thumbnails {
  default: DefaultOrMediumOrHigh
  medium: DefaultOrMediumOrHigh
  high: DefaultOrMediumOrHigh
}
export interface DefaultOrMediumOrHigh {
  url: string
  width: number
  height: number
}

export interface YTChannel {
  kind: string
  etag: string
  pageInfo: PageInfo
  items?: ChannelsEntity[] | null
}
export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
export interface ChannelsEntity {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
  statistics: Statistics
}
export interface Snippet {
  title: string
  description: string
  customUrl: string
  publishedAt: string
  thumbnails: Thumbnails
  localized: Localized
  country: string
}
export interface Thumbnails {
  default: DefaultOrMediumOrHigh
  medium: DefaultOrMediumOrHigh
  high: DefaultOrMediumOrHigh
}
export interface DefaultOrMediumOrHigh {
  url: string
  width: number
  height: number
}
export interface Localized {
  title: string
  description: string
}
export interface ContentDetails {
  relatedPlaylists: RelatedPlaylists
}
export interface RelatedPlaylists {
  likes: string
  uploads: string
}
export interface Statistics {
  viewCount: string
  subscriberCount: string
  hiddenSubscriberCount: boolean
  videoCount: string
}
