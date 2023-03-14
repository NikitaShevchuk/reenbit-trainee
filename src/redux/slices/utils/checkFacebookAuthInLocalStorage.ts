export const checkFacebookAuthInLocalStorage = (): boolean => {
    const isAuthorizedWithFacebook = localStorage.getItem('isAuthorizedWithFacebook');
    return !!isAuthorizedWithFacebook && isAuthorizedWithFacebook === 'true';
};
