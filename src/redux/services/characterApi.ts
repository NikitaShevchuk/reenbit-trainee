import { createApi, defaultSerializeQueryArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, Info } from '@/Types';
import { getCharactersThunkAction } from './utils/getCharactersThunkAction';
import { mergeCharacters } from './utils/mergeCharacters';

export interface CharactersParams {
    page: number;
    searchString?: string | null;
}

const createQueryString = ({ page, searchString }: CharactersParams): string =>
    `character?page=${page}${searchString ? `&name=${searchString}` : ''}`;

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        getAllCharacters: builder.query<Info<Character[]>, CharactersParams>({
            query: (charactersParams) => createQueryString(charactersParams),

            serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {
                return defaultSerializeQueryArgs({
                    endpointName,
                    queryArgs: { searchString: queryArgs.searchString },
                    endpointDefinition
                });
            },

            merge: mergeCharacters,

            // sort characters by a name on the client side since api doesn't support sorting
            onQueryStarted: async (charactersParams, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;
                dispatch(getCharactersThunkAction(charactersParams, data));
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
