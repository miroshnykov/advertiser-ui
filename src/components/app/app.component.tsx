import React from 'react'

import Header from "../header/header.component";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "../../common/apollo-client";
import Home from '../../pages/home/home.page';
import Offers from '../../pages/offers/offers.page';
import './app.component.css'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Header/>
          <Switch>
            <Route path="/offers">
              <Offers/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
    </ApolloProvider>
  )
}

export default App