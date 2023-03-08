import classNames from 'classnames'
import { FC } from 'react'
import style from './input.module.scss'

interface Props {
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    placeHolder: string
    startIcon?: {
        path: string,
        onClick: React.MouseEventHandler<HTMLImageElement>
    }
    endIcon?: {
        path: string,
        onClick: React.MouseEventHandler<HTMLImageElement>
    }
}

export const Input: FC<Props> = ({ onChange, placeHolder, value, endIcon, startIcon }) => {
    return (
        <div className={style.search}>
            {startIcon &&
                <img
                    className={
                        classNames(style.search__icon_start, style.search__icon)
                    }
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
                    className={
                        classNames(style.search__icon_end, style.search__icon)
                    }
                    src={endIcon.path}
                    onClick={endIcon?.onClick}
                    alt='End icon' />
            }
        </div>
    )
}