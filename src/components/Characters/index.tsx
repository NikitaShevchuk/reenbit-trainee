import { useGetAllCharactersQuery } from '@/redux/services/characterApi'
import { CharacterCard } from '../CharacterCard'
import style from './characters.module.scss'

export const Characters = () => {
    const { data: characters, isLoading, isError } = useGetAllCharactersQuery('')
    return (
        <div className={style.characters}>
            {characters?.results && characters.results.map((singleCharacter) => (
                <CharacterCard
                    key={singleCharacter.id}
                    character={singleCharacter}
                />
            ))}
        </div>
    )
}