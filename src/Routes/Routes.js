import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import Layout from '../Components/Layout';
import history from '../history';

import Login from '../Pages/Login';
import CreateReceipt from '../Pages/Receipt/Create';
import ListReceipt from '../Pages/Receipt/List';
import LogOut from '../Pages/LogOut';
import auth from '../services/auth';


const Routes = () =>{
    
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
            auth.isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
            }
        />
    );

    const routes =(
        <Switch>
            <Route exact path="/login" component={Login} />  
            <PrivateRoute exact path="/" component={() => <h1>oi</h1>}/>
            <PrivateRoute exact path="/create-receipt" component={CreateReceipt}/>
            <PrivateRoute exact path="/list-receipt" component={ListReceipt}/>
            <PrivateRoute exact path="/logout" component={LogOut}/>
            <Redirect to="/notFound"  />   
        </Switch>
    );
    

    return (
        <Router history={history}>
            <Layout>      
                {routes}
            </Layout>
        </Router>
            
        
        )
}

export default Routes;
