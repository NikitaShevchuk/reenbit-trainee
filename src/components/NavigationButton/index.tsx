import { Link } from 'react-router-dom';
import backArrow from '@assets/icons/back-arrow.svg';
import style from './navigation-button.module.scss';

export const NavigationButton = () => {
    return (
        <div className={style.button}>
            <img src={backArrow} className={style.button__icon} alt="Button icon" />
            <div className={style.button__text}>go back</div>
            <Link className="link" to="/" />
        </div>
    );
};
