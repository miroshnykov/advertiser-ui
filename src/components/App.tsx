import React from 'react'

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "../common/apollo-client";
import Offers from '../pages/offers/offers.page';
import SignIn from '../pages/sign-In/signIn.page';
import SignUp from '../pages/sign-up/signUp.page';
import Dashboard from '../pages/dashboard/dashboard.page';
import Layout from "./Layout";

const App: React.FC = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>

            <Route path="/signUp">
              <SignUp/>
            </Route>


            <Route path="/signIn">
              <SignIn/>
            </Route>

            <Layout>
              <Route path="/offers">
                <Offers/>
              </Route>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>

            </Layout>
            <Route path="/">
              <Dashboard/>
            </Route>

          </Switch>
        </Router>
      </ApolloProvider>
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/signUp">
              <SignUp/>
            </Route>

            <Route path="/signIn">
              <SignIn/>
            </Route>
            <Redirect to="/signIn"/>

          </Switch>
        </Router>
      </ApolloProvider>
    )
  }

}

export default App