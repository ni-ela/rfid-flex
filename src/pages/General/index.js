import './index.css';
import Input from '../../components/Input';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import { useEffect, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import FollowUpContext from "../FollowUp";

function General(sheetData) {
  //const setSheetData = useOutletContext();

  useEffect(() => {
    console.log("general", sheetData);
    if(sheetData.sheetData !== null) {
      document.getElementById("pedido").value = sheetData[0];
      console.log("campo", sheetData[0]);
      document.getElementById("fornecedor").value = sheetData[1];
    } else {
      document.getElementById("pedido").value = "";
      document.getElementById("fornecedor").value = "";
    }
  }, [sheetData]);

  return (
    <div className="general">
      <div className="general__group-input first-inputs">
        <Input className="general__input" type="text" placeholder="" id="pedido" label="Pedido/REMARKS" />
        <Input className="general__input" type="text" placeholder="" label="Data sistema" />
        <Input className="general__input" type="text" placeholder="" id="fornecedor" label="Fornecedor" />
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
            PROTHEUS
          </AccordionSummary>
          <AccordionDetails className="general__accordion-input">
            <Input className="general__input" type="text" placeholder="" value={sheetData} label="S.C. Protheus" />
            <Input className="general__input" type="text" placeholder="" label="S.I. Protheus" />
            <Input className="general__input" type="text" placeholder="" label="P.O. Protheus" />
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
            id="panel1a-header"
          >
            Vencimentos
          </AccordionSummary>
          <AccordionDetails className="general__accordion-input">
            <Input className="general__input" type="text" placeholder="" label="Vencimento Armazenagem" />
            <Input className="general__input" type="text" placeholder="" label="VENC. DEMURRAGE" />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="general__group-input">
        <Accordion
          style={{
            maxheight: 60,
          }}
        >
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Transporte
          </AccordionSummary>
          <AccordionDetails className="general__accordion-input grid-2">
            <Input className="general__input" type="text" placeholder="" label="Purchase order" />
            <Input className="general__input" type="text" placeholder="" label="Frete" />
            <Input className="general__input" type="text" placeholder="" label="Free time" />
            <Input className="general__input" type="text" placeholder="" label="Embarque" />
            <Input className="general__input" type="text" placeholder="" label="Itens" />
            <Input className="general__input" type="text" placeholder="" label="Data de entrega" />
            <Input className="general__input" type="text" placeholder="" label="Quantidade pedido" />
          </AccordionDetails>
        </Accordion>

      </div>
      <div className="general__group-input">
        <Accordion
          style={{
            maxheight: 60
          }}
        >
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Outros
          </AccordionSummary>
          <AccordionDetails className="general__accordion-input grid-2">
            <Input className="general__input" type="text" placeholder="" label="ETD" />
            <Input className="general__input" type="text" placeholder="" label="ETD REQUESTED" />
            <Input className="general__input" type="text" placeholder="" label="Remarks I" />
            <Input className="general__input" type="text" placeholder="" label="Kit QTY" />
            <Input className="general__input" type="text" placeholder="" label="Freight Forwarder" />
            <Input className="general__input" type="text" placeholder="" label="IconTerms" />
            <Input className="general__input" type="text" placeholder="" label="Necessidade FLEX" />
            <Input className="general__input" type="text" placeholder="" label="COMP/ EIC" />
            <Input className="general__input" type="text" placeholder="" label="ORIGINAL DOCS" />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default General;