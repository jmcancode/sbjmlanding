import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/nav/nav";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";
function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
