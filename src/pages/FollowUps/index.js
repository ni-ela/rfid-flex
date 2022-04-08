import './index.css';
import { Button } from '@mui/material';
import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import TimerActual from '../../components/TimerActual'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FollowUps() {
  const [rows, setRows] = useState([{ 
    id: 1, 
    model: 'A12', 
    project: 'SUFRAMA', 
    product: 'SUFRAMA', 
    hbl: 'Agente de cargas', 
    data: '10/02/2022',
  }]);

  return (
    <div className="follow-ups">
      <div className="card__base follow-ups__list">
        <div className="follow-ups__top">
          <Button variant="contained"  component={Link} to={`/follow-ups/1`} >Cadastrar</Button>
          <SearchInput label="CONSULTAR" className="top__search" />
        </div>
        <Table type="follow-ups" rows={rows} />
      </div>
      <div className="groups-cards">
        <Card value={1} text={"total de follow ups"}/>
        <Card value={1} text={"containers no pátio"}/>
        <Card value={2} text={"containers recebidos"}/>
<TimerActual/>

      </div>
    </div>
  );
}

export default FollowUps;