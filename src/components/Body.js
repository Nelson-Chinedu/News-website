import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Politics from "./Politics";

const Body = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/politics" component={Politics} />
        </Switch>
    )
}

export default Body;