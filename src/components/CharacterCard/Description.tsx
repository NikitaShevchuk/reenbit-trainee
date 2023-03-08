import { FC } from 'react'
import style from './character.module.scss'

interface Props {
    name: string
    species: string
}

export const Description: FC<Props> = ({ name, species }) => {
    return (
        <div className={style.character__description}>
            <h2 className={style.description__name}>{name}</h2>
            <span className='secondary-text'>{species}</span>
        </div>
    )
}
