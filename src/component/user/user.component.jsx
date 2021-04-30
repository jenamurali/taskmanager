import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles, Card, CardActionArea,  CardContent, CardMedia,  Typography, Grid } from "@material-ui/core";;
const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 415,
    },
    gridContainer: {
        padding: "10px 20px 0 20px"
    }
});
const User = () => {
    const allUsers = useSelector(state => state.users.allUsers);
    const classes = useStyles();
    return (
        <div className={classes.gridContainer + " user"}>
            <Grid container spacing={4}>
                {allUsers.map((dat, idx) =>
                    <Grid key={idx} item xs={12} sm={6} md={4} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={dat.picture}
                                    title={dat.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {dat.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default User;