import './index.css';
import { Button, Modal, Box } from '@mui/material';
import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { useState } from 'react';
import Input from '../../components/Input';
import TimerActual from '../../components/TimerActual'

const styl = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

function Containers() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="containers">
      <div className="card__base containers__list">
        <div className="containers__top">
          <Button variant="contained" onClick={handleOpen}>Cadastrar</Button>
          <SearchInput label={"CONSULTAR"} className="top__search" />
        </div>
        <Table type="containers" />
      </div>
      <div className="groups-cards">
        <Card value={3} text={"total de follow ups"} />
        <Card value={4} text={"containers no pátio"} />
        <Card value={2} text={"containers recebidos"} />
        <TimerActual />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styl}>
            <h1>Criar registro de container</h1>
            <Input className="container__input" type="password" placeholder="Exemplo: 000012455588444A" label="Tag RFID" />
            <div>
              <Input className="container__input" type="password" placeholder="" label="Motorista" />
              <Input className="container__input" type="password" placeholder="" label="Placa" />
              <Input className="container__input" type="password" placeholder="" label="Empresa" />

            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Containers;