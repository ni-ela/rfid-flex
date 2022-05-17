import './index.css';
import { Button, Modal, Box } from '@mui/material';
import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { useState } from 'react';
import Input from '../../components/Input';
import TimerActual from '../../components/TimerActual'
import { Controller, useForm } from "react-hook-form";

const styl = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};


export default function ContainersFinisheds() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([{ 
    id: 1,
    rfid: "000012455588444A",
    empresa: "CAPACITORES A",
    hora: "10/10/2021 12:34:10 AM",
    palates: "12",
    status: "no prazo"
  }]);

  return (
    <div className="containers-finisheds">
      <div className="card__base containers-finisheds__list">
        <div className="containers-finisheds__top">
          <SearchInput label={"CONSULTAR"} className="top__search" />
        </div>
        <Table type="containers-finisheds" rows={rows} />
      </div>
      <div className="groups-cards">
        <Card value={1} text={"total de follow ups"} />
        <Card value={1} text={"containers no pátio"} />
        <Card value={2} text={"containers recebidos"} />
        <TimerActual />
       
      </div>
    </div>
  );
}