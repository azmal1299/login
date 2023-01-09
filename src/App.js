import React, { useEffect } from 'react';
import { Router as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import cookies from 'browser-cookies';

//offline-plugin
// require('offline-plugin/runtime').install();

// Routes 
import routes from './routes/index';

// Actions 
import { loadUser } from './actions/Auth'

// Helpers 
import history from './helpers/history';

// Store 
import store from './store'

// Components 
import Header from './components/shared/Header/Header'
import SideMenu from './components/shared/SideMenu/SideMenu'
import Footer from './components/shared/Footer/Footer';
import Helpdesk from './components/shared/Helpdesk/Helpdesk';

function App() {

    useEffect(() => {
        if (cookies.get('token') !== null) {
            store.dispatch(loadUser());
        }
    }, [])

    const routeComponents = routes.map(
        ({ path, component, protectedRoute }, key) => {
            return !protectedRoute ? (
                <Route exact path={path} component={component} key={key} />
            ) : (
                <PrivateRoute path={path} component={component} key={key} />
            );
        }
    );


    return (
        <Provider store={store}>
            <Router history={history}>
                {/* <SideMenu /> */}
                <Header />
                <Switch>
                    {routeComponents}
                </Switch>
                <Footer />
                {/* <Helpdesk /> */}
            </Router>
        </Provider>
    )
}


const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = cookies.get('token');

    return (
        <Route
            {...rest}
            render={props =>
                token !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
            }
        />
    )
};

export default App;
