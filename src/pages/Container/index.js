import './index.css';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Timer from '../../components/Timer';

export default function Container() {
  return (
    <div className="container">
      <div className="card__base container-item__content">
        <div className="container__labels">
          <div>
          <label>Empresa: CAPACITORES A</label>
          <label>São Paulo - SP    CNPJ: 03.709.814/0064-71.</label>
          <label>Motorista: José Alves</label>
          <label>Placa: 5487</label>
        </div>

        <h1 className="timer">
          <Timer />
        </h1>
        <div className="container-item__button">
          <Button variant="contained">EDITAR</Button>
          <Button
            style={{
              backgroundColor: "#4A8360",
            }}
            component={Link} to="/follow-ups/1/general"
            className="btn-primary" variant="contained">FOLLOW UP</Button>
        </div>
        </div>
        <div className="container-item__history">
          <label className="container-item__text">Não há histórico do container</label>
        </div>
      </div>
    </div>
  );
}
