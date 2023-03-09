import { Character, Info } from '@/Types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCharactersThunkAction } from './utils/getCharactersThunkAction';
import { provideTagsForCharacters } from './utils/provideTagsForCharacters';

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    tagTypes: ['Characters'],
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Info<Character[]>, string>({
            query: (page) => `character?page=${page}`,
            providesTags: provideTagsForCharacters,
            async onQueryStarted(page, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(getCharactersThunkAction(page, data));
                } catch {}
            }
        }),
        getCharacterById: builder.query<Character, string>({
            query: (id) => `character/${id}`
        })
    })
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = characterApi;
