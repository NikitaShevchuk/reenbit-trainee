import { useAppDispatch } from '@/redux/hooks';
import { filterSlice } from '@/redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import React from 'react';
import { useGetCharacters } from './useGetCharacters';

export const useGetScrollProperties = () => {
    const { characterData } = useGetCharacters();
    const { data: characters, isLoading, isFetching } = characterData;

    const dispatch = useAppDispatch();
    const hasMore = React.useRef<boolean>(true);
    const updatePageNumber = React.useCallback(
        debounce((page) => {
            dispatch(filterSlice.actions.setPage(page));
        }, 400),
        []
    );

    React.useEffect(() => {
        hasMore.current = true;
    }, [characters]);

    const changePage = (page: number) => {
        hasMore.current = false;
        if (!isLoading && !isFetching && page <= (characters?.info?.pages || 42))
            updatePageNumber(page);
    };
    const preloaderRef = React.useRef<HTMLDivElement | null>(null);
    const threshold = preloaderRef.current ? preloaderRef.current.clientHeight + 50 : 574;

    return {
        hasMore,
        threshold,
        changePage,
        preloaderRef
    };
};
