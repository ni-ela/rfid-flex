import Input from '../../components/Input';
import './index.css';

export default function Agente() {
  return (
    <div className="packinglist">
    <Input className="packinglist__input" type="text" placeholder="" label="HB/L" />
    <Input className="packinglist__input" type="text" placeholder="" label="ATD" />
    <Input className="packinglist__input" type="text" placeholder="" label="POL" />
    <Input className="packinglist__input" type="text" placeholder="" label="NOR" />
    <Input className="packinglist__input" type="text" placeholder="" label="ETA MAO" />
    <Input className="packinglist__input" type="text" placeholder="" label="FINAL VESSEL / PLANE" />
    <Input className="packinglist__input" type="text" placeholder="" label="MODAL" />
    <Input className="packinglist__input" type="text" placeholder="" label="TYPE" />
    <Input className="packinglist__input" type="text" placeholder="" label="CTNR NUMBER" />
    <Input className="packinglist__input" type="text" placeholder="" label="TIPO 20'" />
    <Input className="packinglist__input" type="text" placeholder="" label="TIPO 40'" />
    <Input className="packinglist__input" type="text" placeholder="" label="SHIPOWNER" />
  </div>
  );
}