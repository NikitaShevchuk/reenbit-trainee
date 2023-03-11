import { FC } from 'react'
import style from './loader.module.scss'

interface Props {
    fullScreen?: boolean
}

export const Loader: FC<Props> = ({ fullScreen }) => {
    return (
        <div className={fullScreen ? style.wrapper : ''}>
            <div className={style.loader}></div>
        </div>
    )
}
