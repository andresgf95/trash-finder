/*import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import SmallImage from "./components/SmallImage";
import ProfileImage from "./components/UserProfileImg";

import LogIn from "./views/LogIn";
import NotificationList from "./views/NotificationList";
import UserPanel from "./views/UserPanel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthorizationProvider } from "./services/authorization"
import Description from "./views/description";*/
import "./App.css"
import { ObjectListService } from "./services/Advertisements";
//import Map from "./components/Xeolocalizacion";

/*import AddedList from "./components/AddedList";
import { AuthorizationProvider } from "./services/authorization";
import CreateAccount from "./views/CreateAccount";
import LogIn from "./views/LogIn";
import Backoffice from "./views/Backoffice";*/

import { AuthorizationService } from "./services/authorization";
import LogIn from "./views/LogIn";


function App() {

  return(
   /*<>
      <Header/>
        <AuthorizationProvider>
          <BrowserRouter>
            <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li> 
                <li><Link to="/Login">Inicia Sesión</Link></li>
                <li><Link to="/Rexistro">Rexistro de usuario</Link></li>
                <li><Link to="/Avisos">Lista de avisos</Link></li>
                <li><Link to="/Posts">Aviso detallado</Link></li>
                <li><Link to="/PanelUsuario">Panel de usuario</Link></li>
                <li><Link to="/Back">Backoffice</Link></li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Login" element={<LogIn/>}/>
                <Route path="/Rexistro" element={<CreateAccount/>}/>
                <Route path="/Avisos" element={<NotificationList/>}/>
                <Route path="/Posts" element={<Description/>}/>
                <Route path="/PanelUsuario" element={<UserPanel/>}/>
                <Route path="/Back" element={<Backoffice/>}/>
              </Routes>
            </main>
          </BrowserRouter>
        </AuthorizationProvider>
      <Footer/>
    </>*/
    <>
      <AuthorizationService>
        <LogIn/>
        <ObjectListService>
          
        </ObjectListService>
      </AuthorizationService>
    </>
  );
}

export default App