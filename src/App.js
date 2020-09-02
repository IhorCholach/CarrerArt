import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dropdown from "./components/Dropdown";

import actions from "./store/actions";
import { dataModified } from "./selectors";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => dataModified(state));

  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <div className="wrapper">
            <Dropdown options={data.brandsTerms} type="b-" />
            <Dropdown options={data.terms} type="s-" />
            <Dropdown options={data.styles} type="st-" />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
