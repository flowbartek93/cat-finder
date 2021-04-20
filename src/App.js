import "normalize.css";
import "./fonts/Raleway-ExtraLight.ttf";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SinglePageCat from "./pages/SinglePageCat";
import SearchByName from "./pages/SearchByName";
import SearchByValues from "./pages/SearchByValues";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/search/search-by-name">
          <SearchByName />
        </Route>

        <Route path="/search/search-by-values">
          <SearchByValues />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/cats/:name" children={<SinglePageCat />} />
      </Switch>
    </Router>
  );
}

export default App;
