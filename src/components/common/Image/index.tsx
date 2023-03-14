import classNames from 'classnames';
import { FC } from 'react';
import style from './image.module.scss';

interface Props {
    imageUrl: string | undefined;
    variant?: 'small' | 'large';
}

export const Image: FC<Props> = ({ imageUrl, variant }) => {
    const wrapperClassName = classNames(
        style.image,
        variant === 'small' ? style.image_small : style.image_large
    );
    return (
        <div className={wrapperClassName}>
            <img src={imageUrl} alt="Character" />
        </div>
    );
};
