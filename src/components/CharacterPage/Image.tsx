import { FC } from 'react'
import style from './character-page.module.scss'

interface Props {
    imageUrl: string | undefined
}

export const Image: FC<Props> = ({ imageUrl }) => {
    return (
        <div className={style.character__image}><img src={imageUrl} /></div>
    )
}
