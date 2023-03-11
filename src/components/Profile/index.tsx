import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { profileSelector } from '@/redux/selectors/profile'
import { profileSlice } from '@/redux/slices/profileSlice'
import logoutIcon from '@assets/icons/logout-icon.svg'
import { Image } from '@components/common/Image'
import { googleLogout } from '@react-oauth/google'
import classNames from 'classnames'
import { Button } from '../Button'
import { ErrorPage } from '../ErrorPage'
import { Information } from './Information'
import style from './profile.module.scss'


export const Profile = () => {
    const profile = useAppSelector(profileSelector)
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(profileSlice.actions.logout())
        googleLogout()
    }

    if (!profile) return <ErrorPage />
    return (
        <div className={classNames(style.profile, 'opacity')}>
            <Image imageUrl={profile.picture} variant='small' />
            <h1 className='title title-small'>
                Your profile
            </h1>
            <Information
                profile={profile}
            />
            <Button
                buttonStyle={{ margin: '32px auto 0 auto' }}
                onClick={logout}
                icon={logoutIcon}
                text='Logout'
            />
        </div>
    )
}
