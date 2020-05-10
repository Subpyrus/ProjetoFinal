import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from "./components/main_pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Vendas from './components/main_pages/Venda';
import Projetos from './components/main_pages/Projeto';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateCreator from './components/creators/CreateCreator';
import Sobre from './components/main_pages/Sobre';
import ProjetosDetalhes from './components/projects/ProjectDetails';
import SignUpProfissional from './components/creators/CreateCreator';
import SignUpEmpresas from './components/enterprise/CreateEnterprise';
import Perfil from './components/creators/CreatorDetails';
import Empregos from './components/main_pages/Emprego';
import EmpregosDetalhes from './components/jobs/JobDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavB/>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/vendas" component={Vendas}/>
            <Route exact path="/projetos" component={Projetos}/>
            <Route path="/entrar" component={SignIn}/>
            <Route exact path="/registo" component={SignUp}/>
            <Route path="/profissional" component={CreateCreator}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/projetos/detalhes" component={ProjetosDetalhes}/>
            <Route path="/registo/profissional" component={SignUpProfissional}/>
            <Route path="/registo/empresa" component={SignUpEmpresas}/>
            <Route path="/perfil" component={Perfil}/>
            <Route exact path="/empregos" component={Empregos}/>
            <Route path="/empregos/detalhes" component={EmpregosDetalhes}/>
        </Switch>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
