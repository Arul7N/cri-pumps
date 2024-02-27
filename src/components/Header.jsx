import Logo from '../assets/logo.png';
import '../styles/Header.css';

export default function Header () {
    return (
        <div className="logo-header">
            <img src={Logo} alt="logo" />
        </div>
    );
}