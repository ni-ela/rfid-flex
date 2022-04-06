import './index.css';
import SearchInput from '../../components/SearchInput';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

export default function FollowUp() {
  return (
    <div className="follow-up">
      <div className="follow-ups__list">
        <div>
          
          <SearchInput label="BUSCAR CAMPO" className="top__search" />
          <Button variant="contained">Cadastrar</Button>
          <Button 
            style={{
              backgroundColor: "#4A8360",
                width: 100,
              }}
              component={Link} to="follow-ups" 
              className="btn-primary" variant="contained">SALVAR</Button>  
        </div>
      </div>
    </div>
  );
}
