import './index.css';
import { DataGrid, GridToolbarExport, GridToolbarContainer, GridToolbarExportContainer, ptBR, GridToolbarFilterButton, GridLinkOperator } from '@mui/x-data-grid';
import { renderConTableButton, renderTableButton } from '../TableButton'
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button } from '@mui/material';
import SearchInput from '../SearchInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
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
    { field: 'Invoice', headerName: 'Container RF-ID', width: 180 },
    { field: 'Invoice Date', headerName: 'Empresa', width: 100 },
    { field: 'Payment Terms', headerName: 'Hora', width: 150 },
    { field: 'Invoice Amount', headerName: 'Total de palates', width: 130 },
    { field: 'action', headerName: 'Ação', width: 100, renderCell: renderConTableButton, filterable: false },
];


export default function Table(props) {
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = useState(false);
    
    const { type, rows } = props;
    const [rowss, setRows] = useState(rows);
    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = data.rows.filter((row) => {
          return Object.keys(row).some((field) => {
            return searchRegex.test(row[field].toString());
          });
        });
        setRows(filteredRows);
      };
    const renderButton = () => {
        if(type == "follow-ups") {
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
                <GridToolbarFilterButton variant="contained"/>
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
            return columnsFollowUps;
        }

        if (type == "containers") {
            return columnsContainers;
        }

        if (type == "invoices") {
            return columnsInvoices;
        }
    }
    return (
        <div>
            <div className="table" style={{ height: 400 }}>
                <DataGrid
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                    rows={rowss}
                    components={{ Toolbar: CustomToolbar, }}
                    columns={columnHeader()}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    componentsProps={{
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        filterPanel: {
                            clearSearch: () => requestSearch(''),
                            // Force usage of "And" operator
                            linkOperators: [GridLinkOperator.And],
                            // Display columns by ascending alphabetical order
                            columnsSort: 'asc',
                            filterFormProps: {
                                linkOperatorInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                },
                                columnInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                    sx: { mt: 'auto' },
                                },
                                operatorInputProps: {
                                    variant: 'outlined',
                                    size: 'small',
                                    sx: { mt: 'auto' },
                                },
                                deleteIconProps: {
                                    sx: {
                                        '& .MuiSvgIcon-root': { color: '#d32f2f' },
                                    },
                                },
                            },
                            sx: {
                                // Customize inputs using css selectors
                                '& .MuiDataGrid-filterForm': { p: 2 },
                                '& .MuiDataGrid-filterForm:nth-child(even)': {
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
                                },
                                '& .MuiDataGrid-filterFormLinkOperatorInput': { mr: 2 },
                                '& .MuiDataGrid-filterFormColumnInput': { mr: 2, width: 150 },
                                '& .MuiDataGrid-filterFormOperatorInput': { mr: 2 },
                                '& .MuiDataGrid-filterFormValueInput': { width: 200 },
                            },
                        },
                    }}
                />
            </div>
        </div>

    )
}