import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from "./components/main_pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Vendas from './components/main_pages/Venda';
import Projetos from './components/main_pages/Projeto';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import RecoverPassword from './components/auth/RecoverPassword';
import CreateCreator from './components/creators/CreateCreator';
import Sobre from './components/main_pages/Sobre';
import ProjetosDetalhes from './components/projects/ProjectDetails';
import SignUpProfissional from './components/creators/CreateCreator';
import SignUpEmpresas from './components/enterprise/CreateEnterprise';
import Perfil from './components/creators/CreatorDetails';
import Empregos from './components/main_pages/Emprego';
import EmpregosDetalhes from './components/jobs/JobDetails';
import Freelance from './components/main_pages/Freelance';
import FreelanceDetalhes from './components/freelances/FreelanceDetails';
import CreateFreelance1 from './components/freelances/CreateFreelance';
import CreateFreelance2 from './components/freelances/CreateFreelance2';
import EditarPerfil from './components/creators/EditCreator';
import EditarEnterprise from './components/enterprise/EditEnterprise';
import CreateJob1 from './components/jobs/CreateJob';
import CreateJob2 from './components/jobs/CreateJob2';
import PerfilEmpresa from './components/enterprise/EnterpriseDetails';
import Criador from './components/main_pages/Criador';
import CreateProject from './components/projects/CreateProject';
import './App.css';
import SideNav from './components/layout/SideNav';
import Backdrop from './components/layout/Backdrop';

class App extends Component {

  state = {
    sidenavOpen : false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidenavOpen: !prevState.sidenavOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidenavOpen:false});
  }

  render() {
      let backdrop;
      if(this.state.sidenavOpen){
        backdrop=<Backdrop click={this.backdropClickHandler}/>;
      }
      return (
      <BrowserRouter>
        <NavB sideNavClickHandler={this.drawerToggleClickHandler}/>
        <SideNav show={this.state.sidenavOpen}/>
        {backdrop}
        <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/vendas" component={Vendas}/>
              <Route exact path="/projetos" component={Projetos}/>
              <Route path="/entrar" component={SignIn}/>
              <Route exact path="/registo" component={SignUp}/>
              <Route path="/profissional" component={CreateCreator}/>
              <Route path="/sobre" component={Sobre}/>
              <Route path="/projetos/detalhes/:id" component={ProjetosDetalhes}/>
              <Route path="/registo/profissional" component={SignUpProfissional}/>
              <Route path="/registo/empresa" component={SignUpEmpresas}/>
              <Route exact path="/perfil/utilizador/:id" component={Perfil}/>
              <Route exact path="/empregos" component={Empregos}/>
              <Route path="/empregos/detalhes/:id" component={EmpregosDetalhes}/>
              <Route exact path="/freelance" component={Freelance}/>
              <Route path="/freelance/detalhes/:id" component={FreelanceDetalhes}/>
              <Route exact path="/freelance/criar" component={CreateFreelance1}/>
              <Route path="/freelance/criar/:id" component={CreateFreelance2}/>
              <Route path="/perfil/editar" component={EditarPerfil}/>
              <Route path="/perfil/empresa/editar" component={EditarEnterprise}/>
              <Route exact path="/empregos/criar" component={CreateJob1}/>
              <Route path="/empregos/criar/:id" component={CreateJob2}/>
              <Route path="/perfil/empresa/:id" component={PerfilEmpresa}/>
              <Route path="/criadores" component={Criador}/>
              <Route path="/projetos/criar" component={CreateProject}/>
              <Route path="/recuperarPassword" component={RecoverPassword}/>
          </Switch>
        <Footer/>  
      </BrowserRouter>
    );
  }
  
}

export default App;
