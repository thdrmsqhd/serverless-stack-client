import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound"
import Login from "./containers/Login";

export default function Routes() {
    return(
        <Switch>
            {/* Finally, catch all unmatched routes */}
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    )
}