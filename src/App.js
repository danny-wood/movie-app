import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/ui/layout";
import Home from "./components/ui/home";
import Movie from "./components/ui/movie";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/movie" component={Movie} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
