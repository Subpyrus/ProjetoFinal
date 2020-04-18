import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from "./components/main_pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/layout/Navbar';
import Vendas from './components/main_pages/Venda';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavB/>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/vendas" component={Vendas}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
