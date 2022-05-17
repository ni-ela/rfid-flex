import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Table from '../../components/Table';
import './index.css';

export default function Invoice() {
  const [rows, setRows] = useState([{ 
    id: 1, 
    invoice: 216036, 
    invoiceDate: '30-set-21', 
    paymentTerms: '90 DIAS', 
    invoiceAmount: 'COMPLEMENTO',
  }]);

  return (
    <div className="invoice">
      <form className="invoice__register">
        <div className="invoice__group-input">
          <Input className="invoice__input" type="text" placeholder="" label="Invoice" />
          <Input className="invoice__input" type="text" placeholder="" label="INVOICE DATE" />
          <Input className="invoice__input" type="text" placeholder="" label="PAYMENT TERMS" />
          <Input className="invoice__input" type="text" placeholder="" label="INVOICE AMOUNT" />
        </div>
        <Button  
          style={{
              backgroundColor: "#4A8360",
              width: 510,
          }}
          component={Link} to={``} 
          className="btn-primary invoice__register-invoice" variant="contained">CADASTRAR INVOICE</Button>    
      </form>
      <div className="invoice__box-message">
        <hr className="diviser"></hr>
        <h5>Não há invoices cadastrados e vinculados</h5>
      </div>
      {/* <Table type="invoices" rows={rows} /> */}
  </div>
  );
}