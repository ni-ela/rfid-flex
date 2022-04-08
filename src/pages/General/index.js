import './index.css';
import Input from '../../components/Input';


function General() {
  return (
    <div className="general">
        <Input className="general__input" type="text" placeholder="" label="Pedido/REMARKS" />
        <Input className="general__input" type="text" placeholder="" label="Data sistema" />
        <Input className="general__input" type="text" placeholder="" label="Fornecedor" />
        <Input className="general__input" type="text" placeholder="" label="S.C. Protheus" />
        <Input className="general__input" type="text" placeholder="" label="S.I. Protheus" />
        <Input className="general__input" type="text" placeholder="" label="P.O. Protheus" />
        <Input className="general__input" type="text" placeholder="" label="Purchase order" />
        <Input className="general__input" type="text" placeholder="" label="Free time" />
        <Input className="general__input" type="text" placeholder="" label="Itens" />
        <Input className="general__input" type="text" placeholder="" label="Quantidade pedido" />
        <Input className="general__input" type="text" placeholder="" label="Frete" />
        <Input className="general__input" type="text" placeholder="" label="Embarque" />
        <Input className="general__input" type="text" placeholder="" label="Data de entrega" />
        <Input className="general__input" type="text" placeholder="" label="ETD" />
        <Input className="general__input" type="text" placeholder="" label="ETD REQUESTED" />
        <Input className="general__input" type="text" placeholder="" label="Remarks I" />
        <Input className="general__input" type="text" placeholder="" label="Kit QTY" />
        <Input className="general__input" type="text" placeholder="" label="Freight Forwarder" />
        <Input className="general__input" type="text" placeholder="" label="IconTerms" />
        <Input className="general__input" type="text" placeholder="" label="Necessidade FLEX" />
        <Input className="general__input" type="text" placeholder="" label="COMP/ EIC" />
        <Input className="general__input" type="text" placeholder="" label="ORIGINAL DOCS" />
        <Input className="general__input" type="text" placeholder="" label="Vencimento Armazenagem" />
        <Input className="general__input" type="text" placeholder="" label="VENC. DEMURRAGE" />
    </div>
  );
}

export default General;