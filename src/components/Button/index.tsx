import { FC } from 'react'
import style from './button.module.scss'

interface Props {
    onClick: () => void
    text: string
    icon?: string
}

export const Button: FC<Props> = ({ onClick, icon, text }) => {
    return (
        <div onClick={onClick} className={style.button}>
            {icon && <img src={icon} alt="" className={style.button__icon} />}
            <div className={style.button__text}>
                {text}
            </div>
        </div>
    )
}
