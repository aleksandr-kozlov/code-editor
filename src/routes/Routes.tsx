import { Switch, Route } from 'react-router';
import { paths } from './paths';

const Test = () => <h1>Hello world</h1>;

const Test1 = () => <h1>Code editor page</h1>;

    /**
 *
 * Application routes component
 */
const Routes = () => {
    return (
        <Switch>
            <Route exact path={paths.home} component={Test}/>
            <Route exact path={paths.codeEditor} component={Test1}/>
        </Switch>
    )
}

export default Routes;