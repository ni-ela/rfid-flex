import './index.css';
import Breadcrumb from '../../components/Breadcrumbs';
import Menu from '../../components/Menu';
import { Outlet, useLocation } from 'react-router-dom';
import { title } from '../../utils';

export default function Base() {
  const location = useLocation();
  
  return (
    <div className="app__routes">
      <Menu />
      <div className="app__base">
        <h2 className="app__title">{title[location.pathname]}</h2>
        <Breadcrumb/>
        <Outlet />
      </div>
    </div>
  );
}
