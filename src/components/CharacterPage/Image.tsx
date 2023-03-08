import { FC } from 'react'
import style from './character-page.module.scss'

interface Props {
    imageUrl: string | undefined
}

export const Image: FC<Props> = ({ imageUrl }) => {
    return (
        <img src={imageUrl} className={style.character__image} />
    )
}
