import { AuthorizationService } from "./services/authorization";
import Login from "./views/Login";
import Register from "./views/Register";
import UserApp from "./views/UserApp";


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
