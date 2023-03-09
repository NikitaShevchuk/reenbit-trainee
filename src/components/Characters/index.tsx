import InfiniteScroll from 'react-infinite-scroller'
import { ErrorPage } from '../ErrorPage'
import { CharactersList } from './CharactersList'
import { Preloader } from './Preloader'
import { useGetCharacters } from './hooks/useGetCharacters'
import { useGetScrollProperties } from './hooks/useGetScrollProperties'

export const Characters = () => {
    const { characterData, page } = useGetCharacters();
    const { data: characters, isLoading, isError } = characterData;
    const { changePage, hasMore, threshold, preloaderRef } = useGetScrollProperties()

    if (isError) return <ErrorPage />
    if (isLoading) return <Preloader />

    return (
        <InfiniteScroll
            pageStart={1}
            loadMore={changePage}
            hasMore={hasMore}
            threshold={threshold}
            useCapture
        >
            <CharactersList characters={characters} />
            {page <= (characters?.info?.pages || 42)
                ? <Preloader ref={preloaderRef} />
                : null
            }
        </InfiniteScroll>

    )
}