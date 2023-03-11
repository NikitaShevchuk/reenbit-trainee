import { GoogleLogin } from '@react-oauth/google'
import classNames from 'classnames'
import { FC } from 'react'
import style from './modal.module.scss'

interface Props {
    modalIsOpened: boolean
}

const googleLoginStyles = { style: { display: 'flex', justifyContent: 'center' } };

export const Modal: FC<Props> = ({ modalIsOpened }) => {
    const onSuccess = (response: any) => { console.log(response) }
    const onError = () => { }

    const buttonWidth: string = String(Math.round(window.innerWidth * 0.3)) + 'px'
    return (
        <div className={classNames(style.modal, modalIsOpened ? style.modal_opened : '')}>
            <div className={style.modal__window}>
                <div className={style.modal__window__title}>Choose sign in option</div>
                <GoogleLogin
                    width={buttonWidth}
                    containerProps={googleLoginStyles}
                    onSuccess={onSuccess}
                    onError={onError}
                />
            </div>
        </div>
    )
}
