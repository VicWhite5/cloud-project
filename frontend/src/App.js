import Home from "./pages/home/Home";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Single from "./pages/single/Single";
import Nuevo from "./pages/new/Nuevo";
import Clients from "./pages/Clients/Clients"
import Vendors from "./pages/Vendors/Vendors";
import Services from "./pages/Services/Services"
import Orders from "./pages/Orders/Orders"
import { userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home/>}/>
          <Route path = "login" index element={<Login/>}/>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<Nuevo/>}/>
          </Route>
          <Route path="/clients">
            <Route index element={<Clients/>}/>
            <Route path=":clientId" element={<Single/>}/>
            <Route path="new" element={<Nuevo inputs = {userInputs} title="Add New Client"/>}/>
          </Route>
          <Route path="/vendors">
            <Route index element={<Vendors/>}/>
            <Route path=":vendorId" element={<Single/>}/>
            <Route path="new" element={<Nuevo inputs = {userInputs} title="Add New Vendor"/>} />
          </Route>
          <Route path="/services">
            <Route index element={<Services/>}/>
            <Route path=":servicesId" element={<Nuevo inputs = {userInputs} title="Update Ramen"/>}/>
            <Route path="new" element={<Nuevo inputs = {userInputs} title="Add New Ramen"/>}/>
          </Route>
          <Route path="/orders">
            <Route index element={<Orders/>}/>
            <Route path=":vendorId" element={<Single/>}/>
            <Route path="new" element={<Nuevo inputs = {userInputs} title="Add New Order"/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
