import { Character, Info } from '@/Types';
import { ResultDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/react';

type FuncType =
    | ResultDescription<
          'Characters',
          Info<Character[]>,
          string,
          FetchBaseQueryError,
          FetchBaseQueryMeta | undefined
      >
    | undefined;

export const provideTagsForCharacters: FuncType = (result: Info<Character[]> | undefined) =>
    result?.results
        ? [...result?.results.map(({ id }) => ({ type: 'Characters' as const, id })), 'Characters']
        : ['Characters'];
