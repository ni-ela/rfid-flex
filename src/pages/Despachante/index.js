import Input from '../../components/Input';
import './index.css';

export default function Despachante() {
  return (
    <div className="pagrec">
    <Input className="pagrec__input" type="text" placeholder="" label="Modelo" />
    <Input className="pagrec__input" type="text" placeholder="" label="Customer" />
    <Input className="pagrec__input" type="text" placeholder="" label="Projeto" />
    <Input className="pagrec__input" type="text" placeholder="" label="Produto" />
    <Input className="pagrec__input" type="text" placeholder="" label="VALOR PEDIDO ORIGINAL" />
    <Input className="pagrec__input" type="text" placeholder="" label="PO (Referência)" />
    <Input className="pagrec__input" type="text" placeholder="" label="LOTE / PAG REC PROTHEUS" />
    <Input className="pagrec__input" type="text" placeholder="" label="PO DATE" />
  </div>
  );
}