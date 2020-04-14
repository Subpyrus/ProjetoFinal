import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Pag_Principal from "./Pag_Principal";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <NavB/>
        <Switch>
            <Route exact path="/" component={Pag_Principal}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
