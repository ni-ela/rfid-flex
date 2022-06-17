import './index.css';
import { DataGrid, GridToolbarExport, GridToolbarContainer, ptBR, GridToolbarFilterButton, GridLinkOperator, GridToolbar } from '@mui/x-data-grid';
import { renderConTableButton, renderTableButton } from '../TableButton'
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button } from '@mui/material';
import SearchInput from '../SearchInput';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const columnsFollowUps = [
    { field: 'model', headerName: 'Modelo', width: 130 },
    { field: 'project', headerName: 'Projeto', width: 150 },
    { field: 'product', headerName: 'Produto', width: 150 },
    { field: 'hbl', headerName: 'HB/L', width: 200 },
    { field: 'data', headerName: 'Data', width: 100 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderTableButton, filterable: false },
];

const columnsContainers = [
    { field: 'rfid', headerName: 'Container RF-ID', width: 180 },
    { field: 'empresa', headerName: 'Empresa', width: 100 },
    { field: 'hora', headerName: 'Hora', width: 150 },
    { field: 'palates', headerName: 'Total de palates', width: 130 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderConTableButton, filterable: false },
];

const columnsInvoices = [
    { field: 'invoice', headerName: 'Invoce', width: 180 },
    { field: 'invoiceDate', headerName: 'Invoice Date', width: 100 },
    { field: 'paymentTerms', headerName: 'Payment Terms', width: 150 },
    { field: 'invoiceAmount', headerName: 'Invoice Amount', width: 130 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderConTableButton, filterable: false },
];

function getFields(struct) {
    return struct.map((element) => element.field );
}

export default function Table(props) {
    const [open, setOpen] = useState(false);

    const { type, rows } = props;
    const [rowss, setRows] = useState(rows);
    const [columns, setColumns] = useState(rows);

    useEffect(() => {
        columnHeader()
    }, []);

    const renderButton = () => {
        if (type == "follow-ups") {
            return (
                <Button component={Link} to={`1`} variant="contained">Cadastrar</Button>
            )
        } else {
            return (
                <Button variant="contained">Cadastrar</Button>
            )
        }
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <div className="table__top">
                    {renderButton()}
                    <SearchInput onChange={props.onChange} label={"CONSULTAR"} className="top__search" />
                    <GridToolbarFilterButton variant="contained" />
                    <GridToolbarExport variant="contained" columns={[{ field: 'action', disableExport: true }]} printOptions={{ disableToolbarButton: true }} />
                </div>
            </GridToolbarContainer>
        );
    }

    const { data } = useDemoData({
        dataSet: 'Flex',
        rowLength: 100,
    });

    function columnHeader() {
        if (type == "follow-ups") {
            setColumns(columnsFollowUps);
        }

        if (type == "containers") {
            setColumns(columnsContainers);
        }

        if (type == "invoices") {
            setColumns(columnsInvoices);
        }
    }
    return (
        <div>
            <div className="table" style={{ height: 400 }}>
                <DataGrid
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                    rows={rowss}
                    components={{ Toolbar: CustomToolbar }}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    componentsProps={{
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }}
                />
            </div>
        </div>

    )
}