import classNames from 'classnames'
import { FC } from 'react'
import style from './input.module.scss'

interface IconProps {
    path: string,
    onClick: React.MouseEventHandler<HTMLImageElement>
    className?: string
}

interface Props {
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    placeHolder: string
    startIcon?: IconProps
    endIcon?: IconProps
}

export const Input: FC<Props> = ({ onChange, placeHolder, value, endIcon, startIcon }) => {

    const startIconClassName: string = classNames(
        style.search__icon_start,
        style.search__icon,
        startIcon?.className || ''
    )
    const endIconClassName: string = classNames(
        style.search__icon_end,
        style.search__icon,
        endIcon?.className || ''
    )
    return (
        <div className={style.search}>
            {startIcon &&
                <img
                    className={startIconClassName}
                    src={startIcon.path}
                    onClick={startIcon?.onClick}
                    alt='Start icon' />
            }
            <input
                placeholder={placeHolder}
                type='text'
                value={value}
                onChange={onChange}
                className={style['search__field']}
            />
            {endIcon &&
                <img
                    className={endIconClassName}
                    src={endIcon.path}
                    onClick={endIcon?.onClick}
                    alt='End icon' />
            }
        </div>
    )
}