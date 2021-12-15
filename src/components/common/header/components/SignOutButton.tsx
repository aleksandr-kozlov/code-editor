import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useAuth0} from "@auth0/auth0-react";

const SignOutStyledButton = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
}));

/**
 * Sign out button component
 */
function SignInButton() {
    const { logout } = useAuth0();

    const onSignOut = () => logout({ returnTo: window.location.origin });

    return (
        <SignOutStyledButton onClick={onSignOut}>
            Sign Out
        </SignOutStyledButton>
    );
}

export default SignInButton;