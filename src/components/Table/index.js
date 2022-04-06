import './index.css';
import { DataGrid, ptBR } from '@mui/x-data-grid';
import {renderTableButton} from '../TableButton'

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

export default function Table(props) {
    const { type } = props;
    return (
        <div className="table" style={{ height: 400 }}>
            <DataGrid
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                rows={type == 'follow-ups'? rows : []}
                columns={type == 'follow-ups'? columns : []}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}