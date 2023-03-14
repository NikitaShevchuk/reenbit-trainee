import logo from '@assets/img/logo.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="App Logo" />
        </Link>
    );
};
