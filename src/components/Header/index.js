import './index.css';
import logo from '../../assets/img/logo-rfid.png';
import user from '../../assets/img/user.png';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';

export default function Header() {
  const [logged, setLogged] = useState(false);

  useEffect(()=>{
    setLogged(!window.location.pathname.includes("/login"))
  }, []);

  return (
    <header className="header">
        <div className="header__group-name-project">
          <img src={logo} className="header__logo" alt="logo" />
          <h1 className="header__title">Sistema RF-ID</h1>
        </div>
        { logged &&
          <div className="header__group-profile">
            <Avatar className="header__photo" alt="Imagem de perfil" src={user} />
            <label className="header__username">Joana da Silva</label>
          </div>
        }
    </header>
  );
}
