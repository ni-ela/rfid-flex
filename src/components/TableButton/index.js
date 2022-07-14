import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const renderTableButton = () => {
    const id = 1;
    return (
        <Button 
        style={{
            backgroundColor: "#4A8360",
            width: 100,
        }}
        component={Link} to={`/follow-ups/${id}/general`} 
        className="btn-primary" variant="contained">Ver</Button>    
    )
}

export const renderConTableButton = () => {
    const id = 1;
    return (
        <Button 
        style={{
            backgroundColor: "#4A8360",
            width: 100,
        }}
        component={Link} to={`/containers/${id}`} 
        className="btn-primary" variant="contained">Ver</Button>    
    )
}