import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import PatientRegistration from "../pages/PatientRegistration";
import PageNotFound from "../pages/PageNotFound";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<PatientRegistration />} />
        <Route exact path="/pageNotFound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/pageNotFound" />} />
      </Switch>
    </Router>
  );
}

export default Routes;
