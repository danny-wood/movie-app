import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/ui/layout";
import Home from "./components/ui/home";
import Movies from "./components/ui/movies";
import NotFound from "./components/ui/not-found";
import TVShows from "./components/ui/tv-shows";
import People from "./components/ui/people";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/people" component={People} />
        <Route path="/tv-shows" component={TVShows} />
        <Route path="/movies" component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={Home} exact />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
