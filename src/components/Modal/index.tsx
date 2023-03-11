import useOnClickOutside from '@/hooks/useClickOutside'
import { useGoogleLogin } from '@react-oauth/google'
import classNames from 'classnames'
import React, { FC } from 'react'
import { useCloseOnEscape } from './hooks/useCloseOnEscape'
import style from './modal.module.scss'
import { Button } from '../Button'
import googleIcon from '@assets/icons/google-icon.svg'

interface Props {
    modalIsOpened: boolean,
    setIsModalOpened: (isOpened: boolean) => void,
    openModalOnElements: string[]
}

export const Modal: FC<Props> = ({ modalIsOpened, setIsModalOpened, openModalOnElements }) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null)

    useOnClickOutside({ callback: setIsModalOpened, ref: modalRef, exceptions: openModalOnElements })
    const onKeyDown = useCloseOnEscape(modalRef, modalIsOpened, setIsModalOpened)

    const modalClassName = classNames(style.modal, modalIsOpened ? style.modal_opened : '')
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    return (
        <div className={modalClassName}>
            <div
                ref={modalRef}
                className={style.modal__window}
                tabIndex={0}
                onKeyDown={onKeyDown}
            >
                <div className={style.modal__window__title}>
                    Choose sign in option
                </div>
                <Button icon={googleIcon} text='Sign in with Google' onClick={login} />
            </div>
        </div>
    )
}
