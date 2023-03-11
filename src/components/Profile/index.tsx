import { useAppSelector } from '@/redux/hooks'
import { profileSelector } from '@/redux/selectors/profile'
import { Image } from '@components/common/Image'
import classNames from 'classnames'
import { ErrorPage } from '../ErrorPage'
import { Information } from './Information'
import style from './profile.module.scss'


export const Profile = () => {
    const profile = useAppSelector(profileSelector)
    if (!profile) return <ErrorPage />
    return (
        <div className={classNames(style.profile, 'opacity')}>
            <Image imageUrl={profile.picture} variant='small' />
            <h1 className='title small'>
                Your profile
            </h1>
            <Information
                profile={profile}
            />
        </div>
    )
}
