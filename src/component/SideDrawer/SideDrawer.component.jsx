import React, { useState } from "react";
import { IconButton, SwipeableDrawer, List, ListItem, ListItemText,Divider } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
    },
})

const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
    const toggleDrawer = (anchor, open) => event => {
        event.stopPropagation();
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        console.log(anchor,open)
        setState({ [anchor]: open })
    };
    const sideDrawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
    return (
        <React.Fragment>
            <IconButton edge="start" aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <SwipeableDrawer
                    anchor="right"
                    open={state.right}
                    onOpen={toggleDrawer("right", true)}
                    onClose={toggleDrawer("right", false)}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={toggleDrawer("right", false)}>
                             <ChevronRightIcon /> 
                        </IconButton>
                    </div>
                    <Divider />
                    {sideDrawerList("right")}
                </SwipeableDrawer>
                <Menu
                    fontSize="large" style={{ color: `white` }}
                />
            </IconButton>
        </React.Fragment>
    )
}
export default SideDrawer