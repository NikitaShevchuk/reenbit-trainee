import { Character } from '@/Types'
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Description } from './Description'
import { Image } from './Image'
import style from './character.module.scss'

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
            {character.id !== 0 ?
                <Link
                    className='link'
                    to={`character/${character.id}`}
                /> : null
            }
        </div>
    )
}
