import { FC } from 'react'
import style from './character.module.scss'

interface Props {
    image: string
}

export const Image: FC<Props> = ({ image }) => {
    return (
        <div className={style.character__image}>
            <img src={image} />
        </div>
    )
}
