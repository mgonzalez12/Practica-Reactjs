import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import BadgeDetails from '../pages/BadgeDetails';
import Home from '../pages/Home';
import Rick from '../pages/Rick';
import NotFound from '../pages/NotFound';
import Layout from './Layout';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />   
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/rick" component={Rick} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>  
        </BrowserRouter>
    )
}

export default App;