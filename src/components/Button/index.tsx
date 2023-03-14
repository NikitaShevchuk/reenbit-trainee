import { FC } from 'react';
import style from './button.module.scss';

interface Props {
    onClick: () => void;
    text: string;
    icon?: string;
    buttonStyle?: React.CSSProperties;
}

export const Button: FC<Props> = ({ onClick, icon, text, buttonStyle }) => {
    return (
        <div onClick={onClick} style={buttonStyle || {}} className={style.button}>
            {icon && <img src={icon} alt="" className={style.button__icon} />}
            <span className={style.button__text}>{text}</span>
        </div>
    );
};
