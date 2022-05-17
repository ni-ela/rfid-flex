import Input from '../../components/Input';
import './index.css';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';

export default function Pagrec() {
  return (
    <div className="pagrec">
      <div className="general__group-input first-inputs">
        <Input className="pagrec__input" type="text" placeholder="" label="Modelo" />
        <Input className="pagrec__input" type="text" placeholder="" label="Customer" />
        <Input className="pagrec__input" type="text" placeholder="" label="Projeto" />
        <Input className="pagrec__input" type="text" placeholder="" label="Produto" />
      </div>
      <div className="general__group-input">

      <Accordion
        style={{
          maxheight: 60,
          marginRight: 10,
        }}
      >
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          Lote
        </AccordionSummary>
        <AccordionDetails className="general__accordion-input">
          <Input className="pagrec__input" type="text" placeholder="" label="VALOR PEDIDO ORIGINAL" />
          <Input className="pagrec__input" type="text" placeholder="" label="LOTE / PAG REC PROTHEUS" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          maxheight: 60,
          marginRight: 10,
        }}
      >
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          PO
        </AccordionSummary>
        <AccordionDetails className="general__accordion-input">
          <Input className="pagrec__input" type="text" placeholder="" label="PO (Referência)" />
          <Input className="pagrec__input" type="text" placeholder="" label="PO DATE" />
        </AccordionDetails>
      </Accordion>
          </div>

    </div>
  );
}