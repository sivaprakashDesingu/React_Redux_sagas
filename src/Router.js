import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import App from "./App";
import Item from "./Listing/Item";
import Payment from "./Payment/Payment";
import Status from "./Status/Status";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/payment" render= {props => <Payment {...props}/>} />
      <Route exact path="/status" component={Status} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
