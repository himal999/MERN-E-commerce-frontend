import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import HomePage from './core/Home';


const Routes = ()=>{
    return(
    <BrowserRouter>
    
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/signin" exact component= {Signin}/>
            <Route path="/signup" exact component= {Signup}/>
        </Switch>
    </BrowserRouter>)
}

export default Routes;