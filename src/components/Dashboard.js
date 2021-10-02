import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles-dashboard.css';
import SideMenu from './SideMenu';
import Menu from './Menu';
import Documents from './Documents';

export default function Dashboard(){
    return(
        <div style={{display: "flex"}}>
            <BrowserRouter>
                <SideMenu/>

                <Switch>
                    <Route path="/imagen">
                        <Menu/>
                    </Route>
                    <Route path="/documents">
                        <Documents/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}