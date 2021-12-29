import React from 'react'

import Header from "../header/header.component";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "../../common/apollo-client";
import AutoGrid from '../../pages/home/home.page';
import Offers from '../../pages/offers/offers.page';
import Dash from '../../pages/dashboard/dashboard.page';
import SignIn from '../../pages/sign-In/signIn.page';
import SignUp from '../../pages/sign-up/signUp.page';
import Templates from '../../pages/dashboard/dashboard.page';
import './app.component.css'
import Dashboard from "../dashboard/Dashboard";
import Layout from "../Layout";

const App: React.FC = () => {
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
          </Layout>

            <Route path="/">
              <Dash/>
            </Route>


        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App