import Input from '../../components/Input';
import './index.css';

export default function Despachante() {
  return (
    <div className="pagrec">
    <Input className="pagrec__input" type="text" placeholder="" label="Channel" />
    <Input className="pagrec__input" type="text" placeholder="" label="DI NUMBER" />
    <Input className="pagrec__input" type="text" placeholder="" label="Recinto" />
    <Input className="pagrec__input" type="text" placeholder="" label="Per" />
    <Input className="pagrec__input" type="text" placeholder="" label="VALOR PEDIDO ORIGINAL" />
    <Input className="pagrec__input" type="text" placeholder="" label="PO (Referência)" />
    <Input className="pagrec__input" type="text" placeholder="" label="LOTE / PAG REC PROTHEUS" />
    <Input className="pagrec__input" type="text" placeholder="" label="PO DATE" />
  </div>
  );
}