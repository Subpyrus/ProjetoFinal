import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from "./components/main_pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Vendas from './components/main_pages/Venda';
import Projetos from './components/main_pages/Projeto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavB/>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/vendas" component={Vendas}/>
            <Route path="/projetos" component={Projetos}/>
        </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
