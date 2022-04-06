import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import FollowUps from './pages/FollowUps';
import FollowUp from './pages/FollowUp';
import FinishedsContainers from './pages/FinishedsContainers';
import Containers from './pages/Containers';
import Container from './pages/Container';
import Base from "./pages/Base";

function AppRoutes () {
    return(
    <BrowserRouter>
        <Routes>
            <Route index path="/login" element={<Login />}></Route>
            <Route path="" element={<Base />}>
                <Route path="follow-ups" exact element={<FollowUps />}></Route>
                <Route path="follow-ups/:id" exact element={<FollowUp />}></Route>
                <Route path="containers" element={<Containers />}></Route>
                <Route path="containers/:id" element={<Container />}></Route>
                <Route path="containers-finisheds" element={<FinishedsContainers />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)};

export default AppRoutes;
