import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/loginsignup">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
    </Switch>
    </Router>

    
    </>
  );
}

export default App;
