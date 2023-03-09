import { Character, Info } from '@/Types';
import React from 'react';

export const useSaveScrollHeigh = (
    characters: Info<Character[]> | undefined,
    setHasMore: (hasMore: boolean) => void
) => {
    const isMounted = React.useRef<boolean>(false);

    // scroll window when characters data is loaded and component is mounted
    React.useEffect(() => {
        if (characters && !isMounted.current) {
            window.scrollTo(0, Number(localStorage.getItem('scrollHeight')) || 0);
            isMounted.current = true;
        }
        setHasMore(true);
        localStorage.setItem('scrollHeight', String(window.scrollY));
    }, [characters]);

    React.useEffect(() => {
        const onPageClosed = () => {
            localStorage.setItem('scrollHeight', '0');
        };
        window.addEventListener('beforeunload', onPageClosed, false);
        return () => {
            window.removeEventListener('beforeunload', onPageClosed, false);
        };
    }, []);
};
