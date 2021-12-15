import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { paths } from '../../../routes/paths';
import {useHistory} from "react-router";

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
}));

/**
 * Code editor button component
 */
function CodeEditorButton() {
    const history = useHistory();

    const onClick = () => history.push(paths.codeEditor);

    return (
        <CodeEditorStyledButton onClick={onClick}>
            Code editor
        </CodeEditorStyledButton>
    );
}

export default CodeEditorButton;