import { Character, Info } from "@/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const characterApi = createApi({
    reducerPath: "characterApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Info<Character[]>, string>({
            query: (params) => `character${params}`,
        }),
    }),
});

export const { useGetAllCharactersQuery } = characterApi;
