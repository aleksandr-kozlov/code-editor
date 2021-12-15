import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {Link} from "react-router-dom";
import {paths} from "../../../routes/paths";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import CodeEditorButton from "./components/CodeEditorButton";
import {useAuth0} from "@auth0/auth0-react";
import DarkModeSwitch from "./components/DarkModeSwitch";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.commonColors.white,
}));

const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <AppBar position={'relative'}>
            <Toolbar>
                <Typography variant={'h6'} sx={{ flex: 1}}>
                    <StyledLink to={paths.home}>Code Editor App</StyledLink>
                </Typography>
                <DarkModeSwitch/>
                {isAuthenticated ? <AuthenticatedButtons/> : <UnauthenticatedButtons/>}
            </Toolbar>
        </AppBar>
    )
}

const UnauthenticatedButtons = () => {
    return (
        <>
            <SignInButton/>
        </>
    );
}

const AuthenticatedButtons = () => {
    return (
        <>
            <CodeEditorButton/>
            <SignOutButton/>
        </>
    )
}

export default Header;