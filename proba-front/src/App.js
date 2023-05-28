import { AuthorizationService } from "./services/authorization";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./views/Layout";
import UserApp from "./views/UserApp";


function App() {
  return (
    <>
    <AuthorizationService>
      <BrowserRouter>
      <nav>
        <ul>
          <Link to="/"></Link>
          <Link to="/private/"></Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/private/" element={<UserApp/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </AuthorizationService>
    </>
  );
}

export default App;
