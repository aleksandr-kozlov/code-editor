import { Switch } from '@mui/material';
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {toggleDarkMode} from "../../../../store/slices/dark-mode";
import DarkModeIcon from '@mui/icons-material/Brightness2';

/**
 * Dark mode switch component
 */
function DarkModeSwitch() {
    const isDarkModeEnabled = useAppSelector(state => state.darkMode);
    const dispatch = useAppDispatch();

    const onChange = () => dispatch(toggleDarkMode());

    return <>
        <DarkModeIcon/>
        <Switch color={'default'} onChange={onChange} checked={isDarkModeEnabled}/>
    </>
}

export default DarkModeSwitch;
