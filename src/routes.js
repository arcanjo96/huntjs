import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Main from './pages/Main';
import ProductDetails from './pages/ProductDetails';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={ProductDetails} />
        </Switch>
    </BrowserRouter>
);

export default Routes;