import closeIcon from '@assets/icons/close.svg';
import classNames from 'classnames';
import React, { FC } from 'react';
import useOnClickOutside from '@/hooks/useClickOutside';
import { useCloseOnEscape } from './hooks/useCloseOnEscape';
import style from './modal.module.scss';

interface Props {
    modalIsOpened: boolean;
    setIsModalOpened: (isOpened: boolean) => void;
    openModalOnElements: string[];
    modalTitle?: string;
    Body: React.FC;
}

export const Modal: FC<Props> = ({
    modalIsOpened,
    setIsModalOpened,
    openModalOnElements,
    modalTitle,
    Body
}) => {
    const modalRef = React.useRef<HTMLDivElement | null>(null);

    useOnClickOutside({
        callback: setIsModalOpened,
        ref: modalRef,
        exceptions: openModalOnElements
    });
    const onKeyDown = useCloseOnEscape(modalRef, modalIsOpened, setIsModalOpened);
    const modalClassName = classNames(style.modal, modalIsOpened ? style.modal_opened : '');
    const closeModal = () => setIsModalOpened(false);
    return (
        <div className={modalClassName}>
            <div ref={modalRef} className={style.modal__window} tabIndex={0} onKeyDown={onKeyDown}>
                <img
                    src={closeIcon}
                    onClick={closeModal}
                    className={style.modal__close}
                    alt="close"
                />
                {modalTitle ? <div className={style.modal__window__title}>{modalTitle}</div> : null}
                <Body />
            </div>
        </div>
    );
};
