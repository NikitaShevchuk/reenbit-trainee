import googleIcon from '@assets/icons/google-icon.svg';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { Button } from '../Button';
import style from './login.module.scss';
import React from 'react';

type ErrorType = Pick<TokenResponse, "error" | "error_description" | "error_uri"> | null

export const Login = () => {
    const [error, setError] = React.useState<ErrorType>(null)
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
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
