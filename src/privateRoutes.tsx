import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import StoreContext from './components/Store/Context'

interface IProps {
    component: React.FC;
    exact: boolean,
    path: string,
    children?: any;

    // any other props that come into the component
}

const RoutesPrivate = ({ component: Component , ...rest}: IProps) => {
    const { token } = useContext(StoreContext);
    return (
        <Route
         {...rest}
         render= {()=> token ? <Component {...rest}></Component>: <Redirect to="/login"></Redirect>} >
        </Route>
    )

}

export default RoutesPrivate;

