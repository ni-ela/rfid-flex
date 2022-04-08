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

function Containers() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([{ 
    id: 1,
    rfid: "000012455588444A",
    empresa: "CAPACITORES A",
    hora: "10/10/2021 12:34:10 AM",
    palates: "12",
    status: "no prazo"
  }]);
  const [data, setData] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleSubmit, reset, control, register } = useForm();

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    alert(JSON.stringify(data))
  }

  return (
    <div className="containers">
      <div className="card__base containers__list">
        <div className="containers__top">
          <Button variant="contained" onClick={handleOpen}>Cadastrar</Button>
          <SearchInput label={"CONSULTAR"} className="top__search" />
        </div>
        <Table type="containers" rows={rows} />
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
            <form noValidate onSubmit={handleSubmit((data)=> onSubmit)}>
            <h1>Criar registro de container</h1>
            <div className="container__group-input">
            
                  <Input className="container__input" inputRef={register}
            required type="text" placeholder="Exemplo: 000012455588444A" label="Tag RFID" />
              <Input inputRef={register}
            required className="container__input" type="text" placeholder="" label="Motorista" />
              <Input inputRef={register}
            required className="container__input" type="text" placeholder="" label="Placa" />
              <Input inputRef={register}
            required className="container__input" type="text" placeholder="" label="Empresa" />
            </div>
            <div className="modal__group-button">

              <Button
                style={{
                  backgroundColor: "#4A8360",
                  width: 100,
                }}
                type="submit"
                className="btn-primary" variant="contained">SALVAR</Button>
              <Button
                style={{
                  backgroundColor: "#828282",
                  width: 100,
                }}
                onClick={() => setOpen(false)} to={``}
                className="btn-primary" variant="contained">cancelar</Button>
            </div>
            </form>

          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Containers;