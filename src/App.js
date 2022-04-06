import './index.css';
import Header from './components/Header';
import AppRoutes from './routes';

export default function App () {
  
  return (
    <div className="app"> 
      <Header/>
      <AppRoutes/>
    </div>
  )
}
