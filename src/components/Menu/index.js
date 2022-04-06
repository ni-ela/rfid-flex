import { Link } from 'react-router-dom';
import './index.css';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
export default function Menu() {
  return (
    <div className="menu">
        <Link to="follow-ups">
            <LayersOutlinedIcon/>
        </Link>
        <Link to="containers">
            <InboxOutlinedIcon/>
        </Link>
        <Link to="containers-finisheds">
            <TaskAltOutlinedIcon/>
        </Link>
        <Link to="/login">
            <ExitToAppOutlinedIcon/>
        </Link>
        <Link to="">
            <CachedOutlinedIcon/>
        </Link>
    </div>
  );
}
