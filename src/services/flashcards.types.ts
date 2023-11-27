export interface GetDecksResponse {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export interface GetDecksResponsePagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface GetDecksResponseItemsAuthor {
  id: string
  name: string
}

export interface GetDecksResponseItems {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: any
  created: string
  id: string
  isBlocked?: any
  isDeleted?: any
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
