import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../common/api/common.api";
import {
  AddCardResponseType,
  ArgCreateCardType,
  ArgGetCardsType,
  ArgUpdateCardType,
  DeleteCardResponseType,
  FetchCardsResponseType,
} from "./cards.api.types";
import {
  BaseQueryMeta,
  BaseQueryResult,
} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
  }),
  refetchOnFocus: true,
  tagTypes: ["Cards"],
  endpoints: (build) => {
    return {
      getCards: build.query<FetchCardsResponseType, ArgGetCardsType>({
        query: ({ packId, page, pageCount }) => {
          return {
            url: "cards/card",
            params: {
              cardsPack_id: packId,
              page,
              pageCount,
            },
          };
        },
        providesTags: ["Cards"],
      }),
      addCard: build.mutation<AddCardResponseType, ArgCreateCardType>({
        query: (card) => {
          return {
            method: "POST",
            url: "cards/card",
            body: {
              card,
            },
          };
        },
        invalidatesTags: ["Cards"],
      }),
      deleteCard: build.mutation<DeleteCardResponseType, string>({
        query: (id) => {
          return {
            method: "DELETE",
            url: "cards/card",
            params: {
              id,
            },
          };
        },
        invalidatesTags: ["Cards"],
      }),
      updateCard: build.mutation<any, ArgUpdateCardType>({
        query: (card) => {
          return {
            method: "PUT",
            url: "cards/card",
            body: {
              card,
            },
          };
        },
        invalidatesTags: ["Cards"],
      }),
    };
  },
});

// export const { useGetCardsQuery } = cardsApi;
export const {
  useGetCardsQuery,
  useAddCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardsApi;
