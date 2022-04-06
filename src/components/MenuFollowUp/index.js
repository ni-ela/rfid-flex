import { Link } from 'react-router-dom';
import './index.css';

export default function MenuFollowUp() {
  function isHere(page, url) {
    console.log("a", window.location.pathname.includes(page));
    return  window.location.pathname.includes(page);
  }
  return (
    <div className="menu-followUp">
        <Link className={"menu-followp__link" && isHere("general")? "menu-followp__link-active" : "menu-followp__link"} to="general">
        Geral     
        </Link>
        <Link  className={"menu-followp__link" && isHere("pagrec")? "menu-followp__link-active" : "menu-followp__link"} to="pagrec">
        Pagrec
        </Link>
        <Link  className={"menu-followp__link" && isHere("invoice")? "menu-followp__link-active" : "menu-followp__link"} to="invoice">
        Invoice
        </Link>
        <Link  className={"menu-followp__link" && isHere("packing-list")? "menu-followp__link-active" : "menu-followp__link"} to="packing-list">
        Packing List
        </Link>
        <Link  className={"menu-followp__link" && isHere("agente")? "menu-followp__link-active" : "menu-followp__link"} to="agente">
        Agente de carga
        </Link>
        <Link  className={"menu-followp__link" && isHere("despachante")? "menu-followp__link-active" : "menu-followp__link"} to="despachante">
        Despachante
        </Link>
    </div>
  );
}
