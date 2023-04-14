import './App.css';
import { BrowserRouter as Router, Route , Redirect, Switch } from "react-router-dom";
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  
  return (
    <>
      <Router>
        <MainNavigation></MainNavigation>
        <main>
          <Switch>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Route path="/" exact>
              <Users />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
