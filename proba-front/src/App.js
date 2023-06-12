import { AuthorizationService } from "./services/authorization";
import Login from "./views/Login";
import Register from "./views/Register";
import UserApp from "./views/UserApp";

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/');


function App() {
  return (
    <>
    <AuthorizationService>
      <Login/>
      <Register/>
      <UserApp/>
    </AuthorizationService>
    </>
  );
}

export default App;
