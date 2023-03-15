import googleIcon from '@assets/icons/google-icon.svg';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import FacebookLogin, {
    ReactFacebookFailureResponse,
    ReactFacebookLoginInfo
} from 'react-facebook-login';
import { authorize } from '@/redux/thunks/authorize';
import { IProfile, profileSlice } from '@/redux/slices/profileSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button } from '../Button';
import './facebook-button.scss';
import style from './login.module.scss';
import { createProfileFromResponse } from './utils/createProfileFromResponse';

type ErrorType = Pick<TokenResponse, 'error' | 'error_description' | 'error_uri'> | null;

type FacebookResponse = ReactFacebookLoginInfo | ReactFacebookFailureResponse;

const facebookButtonStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
};

export const Login = () => {
    const [error, setError] = React.useState<ErrorType>(null);
    const dispatch = useAppDispatch();
    const { isAuthorizedWithFacebook } = useAppSelector((state) => state.profileSlice);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            dispatch(profileSlice.actions.setAccessToken(codeResponse.access_token));
            dispatch(authorize());
        },
        onError: (error) => setError(error)
    });

    const facebookCallback = (response: FacebookResponse) => {
        // @ts-ignore
        if (response?.accessToken) {
            dispatch(
                profileSlice.actions.loginWithFacebook(
                    createProfileFromResponse(response as IProfile)
                )
            );
            // @ts-ignore
        } else setError(response.status);
    };
    return (
        <>
            <Button icon={googleIcon} text="Sign in with Google" onClick={login} />
            <FacebookLogin
                appId="194233133239554"
                fields="name,email,picture.type(large)"
                scope="public_profile,user_friends"
                callback={facebookCallback}
                autoLoad={isAuthorizedWithFacebook}
                icon="fa-facebook"
                containerStyle={facebookButtonStyles}
            />
            {error && (
                <div className={style.error}>{error?.error_description || 'Login failed'}</div>
            )}
        </>
    );
};
