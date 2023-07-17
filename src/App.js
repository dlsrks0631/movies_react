import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routers/Home.js";
import Detail from "./routers/Detail.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
