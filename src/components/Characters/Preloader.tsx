import { Character } from "@/Types"
import { CharacterCard } from "../CharacterCard"
import style from './characters.module.scss'

const emptyCharacter: Character = {
    created: '',
    episode: [''],
    gender: 'unknown',
    id: 0,
    image: '',
    location: { name: '', url: '' },
    name: '',
    origin: { name: '', url: '' },
    species: '',
    status: 'unknown',
    type: '',
    url: ''
}

export const Preloader = () => {
    return (
        <div className={style.characters}>
            {Array.from(Array(8)).map((_, index) => <CharacterCard key={index} character={emptyCharacter} />)}
        </div>
    )
}
