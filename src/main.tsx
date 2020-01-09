import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SwitchRoutes } from './core';
import { OrganizationScene, UserProfileScene } from './scenes';
import { rootCss, bodyCss } from './masterStyles';

// reset styles
let body = document.getElementsByTagName('body')[0];
let root = document.getElementById('root');

Object.assign(body.style, bodyCss);
Object.assign(root.style, rootCss);

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path={SwitchRoutes.root} component={OrganizationScene}></Route>
            <Route exact={true} path={SwitchRoutes.root} component={UserProfileScene}></Route>
        </Switch>
    </HashRouter>
    , root);
