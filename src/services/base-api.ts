import { GetDeckByIdArgs, GetDecksArgs, GetDecksResponse } from '@/services/flashcards.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: id => ({
          url: `v1/decks/${id.id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDeckByIdQuery, useGetDecksQuery } = baseApi
