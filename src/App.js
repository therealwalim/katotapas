import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Menu from "./pages/Menu";
import useToken from "./utils/useToken";
import PrivateRoute from "./PrivateRoute";

function App() {
  const { token, setToken, isAuthenticated, deleteToken } = useToken();

  return (
    <Router>
      <div>
        <PrivateRoute
          isAuthenticated={isAuthenticated()}
          path="/myAccount"
          component={Account}
          token={token}
        ></PrivateRoute>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          <LogIn
            setToken={setToken}
            token={token}
            deleteToken={deleteToken}
          ></LogIn>
        </Route>
        <Route exact path="/home" component={Landing} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/" component={Landing}/>
      </div>
    </Router>
  );
}

export default App;
