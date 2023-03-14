import debounce from 'lodash.debounce';
import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { filterSlice } from '@/redux/slices/filterSlice';
import { useGetCharacters } from './useGetCharacters';
import { useSaveScrollHeigh } from './useSaveScrollHeight';

export const useGetScrollProperties = () => {
    const { characterData } = useGetCharacters();
    const { data: characters, isLoading, isFetching } = characterData;
    const dispatch = useAppDispatch();
    const [hasMore, setHasMore] = React.useState<boolean>(true);

    useSaveScrollHeigh(characters, setHasMore);

    const updatePageNumber = React.useCallback(
        debounce((page) => {
            dispatch(filterSlice.actions.setPage(page));
        }, 400),
        []
    );
    const changePage = (page: number) => {
        setHasMore(false);
        const pageNumberIsValid = page <= (characters?.info?.pages || 42);
        if (!isLoading && !isFetching && pageNumberIsValid) {
            updatePageNumber(page);
        }
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
