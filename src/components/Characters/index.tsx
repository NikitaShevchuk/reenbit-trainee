import { useGetAllCharactersQuery } from '@/redux/services/characterApi'
import { CharacterCard } from '../CharacterCard'
import { ErrorPage } from '../ErrorPage'
import { Preloader } from './Preloader'
import style from './characters.module.scss'

export const Characters = () => {
    const { data: characters, isLoading, isError } = useGetAllCharactersQuery('')
    if (isError) return <ErrorPage />
    if (isLoading) return <Preloader />
    return (
        <div className={style.characters}>
            {characters?.results
                ? characters?.results.map((singleCharacter) => (
                    <CharacterCard
                        key={singleCharacter.id}
                        character={singleCharacter}
                    />))
                : null
            }
        </div>
    )
}