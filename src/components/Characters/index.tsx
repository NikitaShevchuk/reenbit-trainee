import InfiniteScroll from 'react-infinite-scroller';
import { CharactersList } from './CharactersList';
import { Preloader } from './Preloader';
import { useGetCharacters } from './hooks/useGetCharacters';
import { useGetScrollProperties } from './hooks/useGetScrollProperties';

export const Characters = () => {
    const { characterData, page, scrollComponentKey } = useGetCharacters();
    const { data: characters, isLoading, isError } = characterData;
    const { changePage, hasMore, threshold, preloaderRef } = useGetScrollProperties();

    if (isError) return <div className="center">Nothing found</div>;
    if (isLoading) return <Preloader />;
    return (
        <InfiniteScroll
            pageStart={page}
            loadMore={changePage}
            hasMore={hasMore}
            threshold={threshold}
            useCapture
            // modify the key to remount the component and reset the current page
            // this is necessary after a new search request is added
            // and component need to start new pagination from page 1
            key={scrollComponentKey}
        >
            <CharactersList characters={characters} />
            {page < (characters?.info?.pages || 42) && characters?.info?.pages !== 1 ? (
                <Preloader ref={preloaderRef} />
            ) : null}
        </InfiniteScroll>
    );
};
