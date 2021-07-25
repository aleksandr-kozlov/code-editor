import React, {PropsWithChildren} from 'react';
import {useAppSelector} from "../store/hooks";
import { createTheme } from '@material-ui/core/styles';
import {appColors, darkModeColors} from "./colors";
import { ThemeProvider } from '@material-ui/core';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
    const darkMode = useAppSelector(state => state.darkMode);
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: appColors.primary,
            }
        },
        background: darkMode ? darkModeColors.background : appColors.background,
        fontColor: darkMode ? darkModeColors.font : appColors.font,
    })

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        background: string,
        fontColor: string,
    }

    interface ThemeOptions {
        background: string,
        fontColor: string,
    }
}

export default CustomThemeProvider;
