import './index.css';
import SearchInput from '../../components/SearchInput';
import { Button } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import MenuFollowUp from '../../components/MenuFollowUp';
import * as XLSX from "xlsx";
import { useEffect, useState } from 'react';

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
        <MenuFollowUp />
        <Outlet context={{setSheetData}} />
      </div>
    </div>
  );
}
