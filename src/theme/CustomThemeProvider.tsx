import React, { PropsWithChildren } from 'react';
import { useAppSelector } from "../store/hooks";
import { lightModeColors, darkModeColors, commonColors } from "./colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
    const darkMode = useAppSelector(state => state.darkMode);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: commonColors.primary,
            },
        },
        background: darkMode ? darkModeColors.background : lightModeColors.background,
        font: darkMode ? darkModeColors.font : lightModeColors.font,
        commonColors,
    });

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

declare module '@mui/material/styles' {
    interface Theme {
        background: string;
        font: string;
        commonColors: { [key: string]: string };
    }
    interface ThemeOptions {
        background: string;
        font: string;
        commonColors: { [key: string]: string };
    }
}

export default CustomThemeProvider;
