import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../common/api/common.api";
import {
  AddCardResponseType,
  ArgCreateCardType,
  GetCards,
} from "./cards.api.types";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
  }),
  tagTypes: ["Cards"],
  endpoints: (build) => {
    return {
      getCards: build.query<GetCards, any>({
        query: (packId) => {
          return {
            url: "cards/card",
            params: {
              cardsPack_id: packId,
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
    };
  },
});

// export const { useGetCardsQuery } = cardsApi;
export const { useGetCardsQuery, useAddCardMutation } = cardsApi;
