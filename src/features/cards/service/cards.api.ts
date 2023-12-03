import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7542/2.0/",
  }),
  endpoints: (build) => {
    return {
      getCards: build.query<any, string>({
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
