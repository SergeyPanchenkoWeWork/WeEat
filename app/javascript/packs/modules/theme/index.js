import { createMuiTheme } from '@material-ui/core/styles';

const init = () => {
    const theme = createMuiTheme({
        typography: {
            useNextVariants: true,
        },
    });

    return theme;
};

export {
    init,
};