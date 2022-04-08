import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login';
import Base from "./pages/Base";
import FollowUps from './pages/FollowUps';
import FollowUp from './pages/FollowUp';
import FinishedsContainers from './pages/FinishedsContainers';
import Containers from './pages/Containers';
import Container from './pages/Container';
import General from './pages/General';
import Pagrec from './pages/Pagrec';
import Invoice from './pages/Invoice';
import Packinglist from './pages/Packinglist';
import Agente from './pages/Agente';
import Despachante from './pages/Despachante';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/login" element={<Login />}></Route>
                <Route path="" element={<Base />}>
                    <Route path="follow-ups" exact element={<FollowUps />}></Route>
                    <Route path="follow-ups/:id" element={<FollowUp />}>
                        <Route path="" index element={<General />}></Route>
                        <Route path="pagrec" element={<Pagrec />}></Route>
                        <Route path="invoice" element={<Invoice />}></Route>
                        <Route path="packing-list" element={<Packinglist />}></Route>
                        <Route path="agente" element={<Agente />}></Route>
                        <Route path="despachante" element={<Despachante />}></Route>
                    </Route>
                    <Route path="containers" element={<Containers />}></Route>
                    <Route path="containers/:id" element={<Container />}></Route>
                    <Route path="containers-finisheds" element={<FinishedsContainers />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
