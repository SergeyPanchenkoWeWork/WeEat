import React from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIconfrom from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Container from '../../base/container';

const headerTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffffff',
            light: '#ffffff',
            dark: '#ffffff',
        },
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    headerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
    },
    bannerWrapper: {
        position: 'relative',
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(0deg, rgba(103, 103, 103, 0.2), rgba(0, 0, 0, 0.3)), url(/assets/weeat-bg.jpg)',
        backgroundColor: '#868686',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        padding: `${theme.spacing.unit * 4}px 0`,
    },
    filtersWrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        padding: `${theme.spacing.unit * 2}px 0`,
    },
    filtersInnerWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'row',
    },
    bannerTitleWrapper: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        margin: `${theme.spacing.unit * 2}px auto`,
        textAlign: 'center',
    },
    bannerTitle: {
        textAlign: 'center',
        margin: `${theme.spacing.unit * 2}px auto`,
        color: 'white',
        fontWeight: 400,
    },
    bannerSubTitle: {
        textAlign: 'center',
        fontSize: '1.5em',
        margin: '0 auto',
        color: 'white',
    },
    buttonOuterContainer: {
        position: 'absolute',
        width: '100%',
        top: 0,
    },
    addButton: {
        margin: `${theme.spacing.unit * 4}px 0 0 auto`,
    },
});

function HeaderLayout({ classes, search, filters, openCreateModal }) {
    return (
        <div className={classes.headerWrapper}>
            <MuiThemeProvider theme={headerTheme }>
                <div className={classes.bannerWrapper}>
                    <div className={classes.bannerTitleWrapper}>
                        <Typography variant="h1" className={classes.bannerTitle}>
                            WeEat
                        </Typography>
                        <Typography variant="h3" component="p" className={classes.bannerSubTitle}>
                            It's 12:00 and you're hungry.
                        </Typography>
                    </div>
                    <Container>
                        {search}
                    </Container>
                    <div className={classes.buttonOuterContainer}>
                        <Container>
                            <IconButton color="primary" onClick={openCreateModal} className={classes.addButton} >
                                <AddIconfrom fontSize="large" />
                            </IconButton>
                        </Container>
                    </div>
                </div>
                <div className={classes.filtersWrapper}>
                    <Container className={classes.filtersInnerWrapper}>
                        {filters}
                    </Container>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default withStyles(styles)(HeaderLayout);