import { createMuiTheme } from '@material-ui/core/styles';

const init = () => {
    const theme = createMuiTheme({
        palette: {
            primary: { main: '#FF0266' },
        },
        typography: {
            useNextVariants: true,
        },
    });

    return theme;
};

export {
    init,
};