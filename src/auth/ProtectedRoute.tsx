import { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/common/Loading/Loading';

type ProtectedRouteProps = {
    component: ComponentType;
    [key: string]: any;
};

/**
 * Protected route component
 *
 * @param {ComponentType} component - Protected component
 * @param args - Arguments
 */
const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
    <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />,
        })}
        {...args}
    />
);

export default ProtectedRoute;