import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import CriarConta from './pages/CriarConta';
import GrandesEmpresas from './pages/GrandesEmpresas';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PequenasEmpresas from './pages/PequenasEmpresas';
import Pessoal from './pages/Pessoal';


const Routes = () =>{
    return(

        <BrowserRouter>
          <Route component={Pessoal} path="/Pessoal"></Route>
          <Route component={PequenasEmpresas} path="/PequenasEmpresas"></Route>
          <Route component={GrandesEmpresas} path="/GrandesEmpresas"></Route>
          <Route component={Login} path="/Login"></Route>
          <Route component={Logout} path="/Logout"></Route>
          <Route component={CriarConta} path="/CriarConta"></Route>
          <Route component={Home} exact path="/" ></Route>
        </BrowserRouter>

    );
}

export default Routes;