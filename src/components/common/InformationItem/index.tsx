import { CharacterLocation } from '@/Types'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import style from './information-item.module.scss'

interface Props {
    title: string | undefined
    value: string | undefined | CharacterLocation
    isLoading?: boolean
}

export const InformationItem: FC<Props> = ({ title, value, isLoading }) => {
    return (
        <div className={style.information}>
            <h3 className={style.information__title}>
                {isLoading ? <Skeleton inline width='20%' /> : title}
            </h3>
            <div className='secondary-text'>
                {isLoading
                    ? <Skeleton inline width='30%' />
                    : typeof value === 'object'
                        // @ts-ignore
                        ? value?.name || 'unknown'
                        : value || 'unknown'
                }
            </div>
        </div>
    )
}
