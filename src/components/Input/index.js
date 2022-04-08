import './index.css';
import TextField from '@mui/material/TextField';

function Input(props) {
    const { type, placeholder, label, id } = props;
    return (
        <TextField
            id={id}
            type={type}
            placeholder={placeholder}
            className="input"
            color="success"
            label={label}
            variant="filled" />
    );
}

export default Input;
