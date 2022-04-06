import './index.css';
import { Button } from '@mui/material';
import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { dateActual } from '../../utils';
import { Timer } from '../../components/Timer';

function Containers() {
  return (
    <div className="containers">
      <div className="containers__list">
        <div className="containers__top">
          <Button variant="contained">Cadastrar</Button>
          <SearchInput label={"CONSULTAR"} className="top__search" />
        </div>
        <Table type="containers" />
      </div>
      <div className="groups-cards">
        <Card value={3} text={"total de follow ups"}/>
        <Card value={4} text={"containers no pátio"}/>
        <Card value={2} text={"containers recebidos"}/>
        <label>{dateActual()} <Timer /></label>
      </div>
    </div>
  );
}

export default Containers;