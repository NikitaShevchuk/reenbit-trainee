import React from 'react';

export const useCloseOnEscape = (
    modalRef: React.MutableRefObject<HTMLDivElement | null>,
    modalIsOpened: boolean,
    setIsModalOpened: (isOpened: boolean) => void
) => {
    React.useEffect(() => {
        if (modalIsOpened) {
            if (modalRef.current) modalRef.current.focus();
        }
    }, [modalIsOpened]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') setIsModalOpened(false);
    };
    return onKeyDown;
};
