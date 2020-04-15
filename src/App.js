import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./components/page/Home";
import Movies from "./components/page/Movies";
import NotFound from "./components/page/NotFound";
import TVShows from "./components/page/TVShows";
import People from "./components/page/People";
import MovieDetails from "./components/page/MovieDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/people" component={People} />
        <Route path="/tv-shows" component={TVShows} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={Home} exact />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
