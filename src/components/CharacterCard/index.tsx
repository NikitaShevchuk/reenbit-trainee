import { Character } from '@/Types'
import { FC } from 'react'
import { Image } from './Image'
import style from './character.module.scss'
import { Description } from './Description'
import classNames from 'classnames'

interface Props {
    character: Character
}

export const CharacterCard: FC<Props> = ({ character }) => {
    return (
        <div className={classNames(style.character, 'opacity')}>
            <Image image={character.image} />
            <Description
                name={character.name}
                species={character.species}
            />
        </div>
    )
}
