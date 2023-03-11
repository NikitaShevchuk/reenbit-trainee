import { useAppDispatch } from '@/redux/hooks';
import { profileSlice } from '@/redux/slices/profileSlice';
import { authorize } from '@/redux/thunks/authorize';
import googleIcon from '@assets/icons/google-icon.svg';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { Button } from '../Button';
import style from './login.module.scss';

type ErrorType = Pick<TokenResponse, "error" | "error_description" | "error_uri"> | null

export const Login = () => {
    const [error, setError] = React.useState<ErrorType>(null)
    const dispatch = useAppDispatch()
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            dispatch(profileSlice.actions.setAccessToken(codeResponse.access_token))
            dispatch(authorize())
        },
        onError: (error) => setError(error)
    });
    return (
        <>
            <Button icon={googleIcon} text='Sign in with Google' onClick={login} />
            {error && (
                <div className={style.modal__error}>
                    {error?.error_description || 'Login failed'}
                </div>
            )}
        </>
    )
}
