import { CharacterLocation } from '@/Types'
import style from './character-page.module.scss'
import { FC } from 'react'

interface Props {
    title: string | undefined
    value: string | undefined | CharacterLocation
}

export const InformationItem: FC<Props> = ({ title, value }) => {
    return (
        <div className={style.character__information}>
            <h3 className={style.character__information__title}>
                {title}
            </h3>
            <div className='secondary-text'>
                {typeof value === 'object'
                    ? value?.name || 'unknown'
                    : value || 'unknown'
                }
            </div>
        </div>
    )
}
