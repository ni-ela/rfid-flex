import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import './index.css';

export default function Invoice() {
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
              width: 100,
          }}
          component={Link} to={``} 
          className="btn-primary" variant="contained">CADASTRAR INVOICE</Button>    
      </form>
  </div>
  );
}