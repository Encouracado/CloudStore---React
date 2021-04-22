import React from "react";
import StoreProvider from "./components/Store/Provider";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CriarConta from "./pages/CriarConta";
import GrandesEmpresas from "./pages/GrandesEmpresas";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import PequenasEmpresas from "./pages/PequenasEmpresas";
import Pessoal from "./pages/Pessoal";
import PrivateRoutes from './privateRoutes'
import MinhaArea from './pages/MinhaArea'

const Routes = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Route component={Pessoal} path="/Pessoal"></Route>
        <Route component={PequenasEmpresas} path="/PequenasEmpresas"></Route>
        <Route component={GrandesEmpresas} path="/GrandesEmpresas"></Route>
        <Route component={Login} path="/Login"></Route>
        <Route component={Logout} path="/Logout"></Route>
        <Route component={CriarConta} path="/CriarConta"></Route>
        <Route component={Home} exact path="/"></Route>
        <PrivateRoutes component={MinhaArea} exact path="/minhahome"></PrivateRoutes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Routes;
