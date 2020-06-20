import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";


export default function Routes() {
    return(
        <Switch>
            {/* Finally, catch all unmatched routes */}
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/notes/new">
                <NewNote />
            </Route>
        </Switch>
    )
}