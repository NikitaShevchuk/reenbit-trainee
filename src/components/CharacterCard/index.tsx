import { Character } from '@/Types'
import { FC } from 'react'
import { Image } from './Image'
import style from './character.module.scss'
import { Description } from './Description'

interface Props {
    character: Character
}

export const CharacterCard: FC<Props> = ({ character }) => {
    return (
        <div className={style.character}>
            <Image image={character.image} />
            <Description
                name={character.name}
                species={character.species}
            />
        </div>
    )
}
