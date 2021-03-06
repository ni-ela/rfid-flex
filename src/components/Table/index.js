import './index.css';
import { DataGrid, ptBR } from '@mui/x-data-grid';
import {renderConTableButton, renderTableButton} from '../TableButton'

const columns = [
    { field: 'model', headerName: 'Modelo', width: 130 },
    { field: 'project', headerName: 'Projeto', width: 150 },
    { field: 'product', headerName: 'Produto', width: 150 },
    { field: 'hbl', headerName: 'HB/L', width: 200 },
    { field: 'data', headerName: 'Data', width: 100 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderTableButton },
  ];

const rows = [{ 
            id: 1, 
            model: 'A12', 
            project: 'SUFRAMA', 
            product: 'SUFRAMA', 
            hbl: 'Agente de cargas', 
            data: '10/02/2022',
        }];

        
  const columnsContainers = [
    { field: 'rfid', headerName: 'Container RF-ID', width: 180 },
    { field: 'empresa', headerName: 'Empresa', width: 100 },
    { field: 'hora', headerName: 'Hora', width: 150 },
    { field: 'palates', headerName: 'Total de palates', width: 130 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderConTableButton },
  ];

const rowsContainers = [{ 
    id: 1,
    rfid: "000012455588444A",
    empresa: "CAPACITORES A",
    hora: "10/10/2021 12:34:10 AM",
    palates: "12",
    status: "no prazo"
}];

export default function Table(props) {
    const { type } = props;
    return (
        <div className="table" style={{ height: 400 }}>
            <DataGrid
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                rows={type == 'follow-ups'? rows : rowsContainers}
                columns={type == 'follow-ups'? columns : columnsContainers}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}