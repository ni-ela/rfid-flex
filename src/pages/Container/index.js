import './index.css';
import SearchInput from '../../components/SearchInput';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function Container() {
  return (
    <div className="container">
      <div className="containers__list">
        <div className="containers__button">
          <Button variant="contained">EDITAR</Button>
          <Button 
            style={{
              backgroundColor: "#4A8360",
              }}
              component={Link} to="containers" 
              className="btn-primary" variant="contained">FOLLOW UP</Button>  
        </div>
      </div>
    </div>
  );
}
