import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../../common/api/common.api";
import { GetCards } from "./cards.api.types";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    credentials: "include",
  }),
  endpoints: (build) => {
    return {
      getCards: build.query<GetCards, string>({
        query: (packId) => {
          return {
            url: "cards/card",
            params: {
              cardsPack_id: packId,
            },
          };
        },
      }),
    };
  },
});

export const { useGetCardsQuery } = cardsApi;
