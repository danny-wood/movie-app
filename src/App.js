import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth";
import PrivateRoute from "./components/common/PrivateRoute";
import Layout from "./components/ui/Layout";
import Home from "./components/page/Home";
import Movies from "./components/page/Movies";
import NotFound from "./components/page/NotFound";
import TVShows from "./components/page/TVShows";
import People from "./components/page/People";
import MovieDetails from "./components/page/MovieDetails";
import TVShowDetails from "./components/page/TVShowDetails";
import ScrollToTop from "./components/common/ScrollToTop";
import PeopleDetails from "./components/page/PeopleDetails";
import Dashboard from "./components/page/Dashboard";
import Login from "./components/page/Login";
import Approve from "./components/page/Approve";
import Profile from "./components/page/Profile";

function App() {
  return (
    <ProvideAuth>
      <Layout>
        <ScrollToTop />
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/approve" component={Approve} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/people/:id" component={PeopleDetails} />
          <Route path="/people" component={People} />
          <Route path="/tv-show/:id" component={TVShowDetails} />
          <Route path="/tv-shows" component={TVShows} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={Home} exact />
          <Redirect to="/not-found" />
        </Switch>
      </Layout>
    </ProvideAuth>
  );
}

export default App;
