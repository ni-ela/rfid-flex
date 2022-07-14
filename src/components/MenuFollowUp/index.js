import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './index.css';
import { useContext, useEffect } from 'react';
import FollowUpContext from "../../pages/FollowUp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import General from '../../pages/General';
import Pagrec from '../../pages/Pagrec';
import Packinglist from '../../pages/Packinglist';
import Invoice from '../../pages/Invoice';
import Agente from '../../pages/Agente';
import Despachante from '../../pages/Despachante';

export default function MenuFollowUp() {
  const sheetData = useContext(FollowUpContext);

  useEffect(() => {
    console.log("menuu", sheetData);
  }, [sheetData]);

  return (
    <Tabs className="menu-followUp">
      <TabList>
        <Tab component={Link} to="">Geral</Tab>
        <Tab component={Link} to="pagrec">Pagrec</Tab>
        <Tab component={Link} to="invoice">Invoice</Tab>
        <Tab component={Link} to="packing-list">Packing List</Tab>
        <Tab component={Link} to="agente">Agente</Tab>
        <Tab component={Link} to="despachante">Despachante</Tab>
      </TabList>
      <TabPanel>
      <General sheetData={{sheetData}} />
      </TabPanel>
      <TabPanel>
        <Pagrec />
      </TabPanel>
      <TabPanel>
        <Invoice />
      </TabPanel>
      <TabPanel>
        <Packinglist />
      </TabPanel>
      <TabPanel>
        <Agente />
      </TabPanel>
      <TabPanel>
        <Despachante />
      </TabPanel>
    </Tabs >
  );
}
