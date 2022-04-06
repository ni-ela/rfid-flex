import './index.css';
import logo from '../../assets/img/logo-rfid.png';
import user from '../../assets/img/user.png';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <header className="header">
        <div className="header__group-name-project">
          <img src={logo} className="header__logo" alt="logo" />
          <h1 className="header__title">Sistema RF-ID</h1>
        </div>
        <div className="header__group-profile">
          <Avatar className="header__photo" alt="Imagem de perfil" src={user} />
          <label className="header__username">Joana da Silva</label>
        </div>
    </header>
  );
}
