import './index.css';
import { Button, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import logoFlex from "../../assets/img/logo-flex.png";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <img className="login__logo" src={logoFlex} alt="logo da Flex"></img>
        <h1 className="login__title">Entrada</h1>
        <Input className="login__input email" type="email" placeholder="Digite seu e-mail" label="E-mail" />
        <Input className="login__input password" type="password" placeholder="Digite sua senha" label="Senha" />
        <Button
          style={{
            backgroundColor: "#4A8360",
          }}
          component={Link} to="/follow-ups"
          className="login__button btn-primary" variant="contained">Entrar</Button>
        <div className="login__remember">
          <Checkbox className="login__checkbox" inputProps={{ 'aria-label': 'controlled' }} color="success" />
          <small className="login__small remember">lembrar de mim</small>
        </div>
        <a className="login__forgot small" src="/forgot-password">esqueci minha senha</a>
        <div className="login__divisers">
          <hr className="login__diviser--solid" />
          <small>ou</small>
          <hr className="login__diviser--solid" />
        </div>
        <small className="login__signup small">Ainda não tem login?
          <a className="login__signup-link">Cadastre-se</a>
        </small>
      </form>
    </div>
  );
}

export default Login;
