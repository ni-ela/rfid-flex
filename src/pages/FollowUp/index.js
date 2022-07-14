import './index.css';
import SearchInput from '../../components/SearchInput';
import { Button } from '@mui/material';
import MenuFollowUp from '../../components/MenuFollowUp';
import * as XLSX from "xlsx";
import {useState, useEffect } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './index.css';
import FollowUpContext from "../../pages/FollowUp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import General from '../../pages/General';
import Pagrec from '../../pages/Pagrec';
import Packinglist from '../../pages/Packinglist';
import Invoice from '../../pages/Invoice';
import Agente from '../../pages/Agente';
import Despachante from '../../pages/Despachante';

export default function FollowUp() {
  const [sheetData, setSheetData] = useState(null);

  const onChange = (e) => {
    const [file] = e.target.files; // recebe o arquivo
    const reader = new FileReader(); //instäncia de leitura 

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      //const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      const data = XLSX.utils.sheet_to_json(ws, {header: 1});
      setSheetData(data[1]);
    };
    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    console.log("followup", sheetData);

  }, [sheetData]);

  return (
    <div className="follow-up">
      <div className="follow-up__top">
        <SearchInput label="BUSCAR CAMPO" className="top__search" />
        <div>
          <label className="follow-up__upload-label MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root btn-primary css-sghohy-MuiButtonBase-root-MuiButton-root"
            for="sheet-btn">Importar dados base</label>
          <input className="follow-up__upload" type="file" id="sheet-btn" name="sheet" onChange={onChange} />
        </div>
        <Button
          style={{
            backgroundColor: "#4A8360",
            width: 100,
          }}
          component={Link} to="follow-ups"
          className="btn-primary" variant="contained">SALVAR</Button>
      </div>
      <div className="follow-up__content">
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
      <General sheetData={sheetData} />
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
      {/*   <FollowUpContext.Provider value={sheetData}>
          <Outlet sheetData={{sheetData}} />
        </FollowUpContext.Provider> */}
      </div>
    </div>
  );
}
