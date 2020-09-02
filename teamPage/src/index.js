
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/css/image.scss";
import Index from "./views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
          <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
