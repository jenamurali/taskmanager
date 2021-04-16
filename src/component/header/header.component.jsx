import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container, Hidden } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer.component"

const navLinks = [
    { title: `Create Task`, path: `/task` },
    { title: `Users`, path: `/users` },
    // { title: `blog`, path: `/blog` },
    // { title: `contact`, path: `/contact` },
    // { title: `faq`, path: `/faq` },
];

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

export const Header = () => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home"
                        onClick={() => history.push("/")}
                    >
                        <Home fontSize="large" />
                    </IconButton>
                    <Hidden smDown>
                        <List component="nav"
                            aria-labelledby="main navigation"
                            className={classes.navDisplayFlex}
                        >
                            {navLinks.map(({ title, path }) => (
                                <Link to={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Hidden>
                    <Hidden mdUp>
                        <SideDrawer navLinks={navLinks} />
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

