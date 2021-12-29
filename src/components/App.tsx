import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "../common/apollo-client";
import Offers from '../pages/offers/offers.page';
import SignIn from '../pages/sign-In/signIn.page';
import SignUp from '../pages/sign-up/signUp.page';
import Layout from "./Layout";

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
            </Route>


        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App