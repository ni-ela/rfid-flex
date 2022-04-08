import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { GridSearchIcon } from '@mui/x-data-grid';
import './index.css';

export default function SearchInput(props) {
  const { label } = props;
  return (
    <div className="search-input">
        <TextField className="search__field" color="success" label={label} variant="outlined" />
        <Button 
            style={{
              backgroundColor: "#4A8360"
            }}
            className="search__button" 
            variant="contained" 
            size="small">
                <GridSearchIcon sx={{ fontSize: 25 }} />
        </Button>
    </div>
  );
}