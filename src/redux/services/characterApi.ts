import { mergeCharacters } from './utils/mergeCharacters';
import { Character, Info } from '@/Types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCharactersThunkAction } from './utils/getCharactersThunkAction';

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    tagTypes: ['Characters'],
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Info<Character[]>, number>({
            query: (page) => `character?page=${page}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: mergeCharacters,
            onQueryStarted: async (page, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(getCharactersThunkAction(page, data));
                } catch {}
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            }
        }),
        getCharacterById: builder.query<Character, string>({
            query: (id) => `character/${id}`
        })
    })
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = characterApi;
