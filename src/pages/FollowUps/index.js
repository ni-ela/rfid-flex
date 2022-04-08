import './index.css';
import { Button } from '@mui/material';
import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import TimerActual from '../../components/TimerActual'

function FollowUps() {
  return (
    <div className="follow-ups">
      <div className="card__base follow-ups__list">
        <div className="follow-ups__top">
          <Button variant="contained">Cadastrar</Button>
          <SearchInput label="CONSULTAR" className="top__search" />
        </div>
        <Table type="follow-ups" />
      </div>
      <div className="groups-cards">
        <Card value={3} text={"total de follow ups"}/>
        <Card value={4} text={"containers no pátio"}/>
        <Card value={2} text={"containers recebidos"}/>
<TimerActual/>

      </div>
    </div>
  );
}

export default FollowUps;