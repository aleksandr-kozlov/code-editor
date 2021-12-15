import React from "react";
import { Switch, Route } from 'react-router';
import { paths } from './paths';
import ProtectedRoute from "../auth/ProtectedRoute";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../components/common/Loading/Loading";

const HomePage = React.lazy(() => import("../pages/home/Home"));

const CodeEditorPage = React.lazy(() => import("../pages/code-editor/CodeEditor"));

/**
 * Application routes component
 */
const Routes = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <Switch>
            <Route exact path={paths.home} component={HomePage}/>
            <ProtectedRoute exact path={paths.codeEditor} component={CodeEditorPage}/>
        </Switch>
    )
}

export default Routes;