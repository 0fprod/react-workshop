import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SwitchRoutes } from './core';
import { OrganizationScene, UserProfileScene } from './scenes';

// reset styles
let body = document.getElementsByTagName('body')[0];
const resetCss = {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto'    
}
Object.assign(body.style, resetCss);


ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path={SwitchRoutes.root} component={OrganizationScene}></Route>
            <Route exact={true} path={SwitchRoutes.root} component={UserProfileScene}></Route>
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
