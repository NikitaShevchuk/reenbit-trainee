import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import style from './character.module.scss';

interface Props {
    name: string;
    species: string;
}

export const Description: FC<Props> = ({ name, species }) => {
    return (
        <div className={style.character__description}>
            <h2 className={style.description__name}>{name || <Skeleton width="40%" inline />}</h2>
            <span className="secondary-text">{species || <Skeleton width="30%" inline />}</span>
        </div>
    );
};
