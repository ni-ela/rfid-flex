import Input from '../../components/Input';
import './index.css';

export default function Packinglist() {
  return (
    <div className="packinglist">
    <Input className="packinglist__input" type="text" placeholder="" label="NW" />
    <Input className="packinglist__input" type="text" placeholder="" label="GW" />
    <Input className="packinglist__input" type="text" placeholder="" label="CBM" />
    <Input className="packinglist__input" type="text" placeholder="" label="PALLETS" />
    <Input className="packinglist__input" type="text" placeholder="" label="CARTONS" />
  </div>
  );
}