import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useAuth0} from "@auth0/auth0-react";
import { paths } from '../../../routes/paths';

const SignInStyledButton = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
}));

/**
 * Sign in button component
 */
function SignInButton() {
    const { loginWithRedirect } = useAuth0();

    const onSignIn = () => loginWithRedirect({ appState: { returnTo: paths.codeEditor }});

    return (
        <SignInStyledButton onClick={onSignIn}>
            Sign In
        </SignInStyledButton>
    );
}

export default SignInButton;