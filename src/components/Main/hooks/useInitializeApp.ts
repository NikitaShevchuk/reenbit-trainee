import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isInitializedSelector } from '@/redux/selectors/profile';
import { authorize } from '@/redux/thunks/authorize';

export const useInitializeApp = () => {
    const isInitialized = useAppSelector(isInitializedSelector);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(authorize());
    }, []);

    return isInitialized;
};
