import LogIn from "./components/LogIn/LogIn";
import { AuthorizationService } from "./services/authorization";
import Container from "./components/containers/container"


function App() {
  return (
    <>
    <AuthorizationService>
      <LogIn/>
      <Container/>
    </AuthorizationService>
    </>
  );
}

export default App;
