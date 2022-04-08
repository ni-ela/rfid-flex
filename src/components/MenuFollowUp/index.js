import { Link } from 'react-router-dom';
import './index.css';

export default function MenuFollowUp() {
  function isHere(page, url) {
    console.log("a", window.location.pathname.includes(page));
    return  window.location.pathname.includes(page);
  }
  return (
    <div className="menu-followUp">
        <Link className={window.location.pathname.includes("") ? "link-active" : "link-normal"} to="">
        Geral     
        </Link>
        <Link  className={window.location.pathname.includes("/pagrec") ? "link-active" : "link-normal"} to="pagrec">
        Pagrec
        </Link>
        <Link  className={window.location.pathname.includes("/invoice") ? "link-active" : "link-normal"} to="invoice">
        Invoice
        </Link>
        <Link  className={window.location.pathname.includes("/packing-list") ? "link-active" : "link-normal"} to="packing-list">
        Packing List
        </Link>
        <Link  className={window.location.pathname.includes("/agente") ? "link-active" : "link-normal"} to="agente">
        Agente de carga
        </Link>
        <Link  className={window.location.pathname.includes("/despachante") ? "link-active" : "link-normal"} to="despachante">
        Despachante
        </Link>
    </div>
  );
}
