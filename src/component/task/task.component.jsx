import React,{useRef, useEffect} from 'react';
import { Grid, TextField, makeStyles } from "@material-ui/core";
import moment from "moment";
import "jquery-datetimepicker";
import jquery from "jquery"

const useStyles = makeStyles({
    formWidth : {
        width : "100%",
        margin : '10px 0'
    }
})
const Task = () => {
    const dateInput = useRef(null);
    let classes = useStyles();
    useEffect(() => {
        debugger
        jquery('#datetimelocal').datetimepicker({
            format:'d.m.Y H:i',
            lang:'ru'
          });
    },[]);
    return (
        <Grid container item xs={12} sm={12} md={6} >
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    label="Message" variant="outlined"
                    className={classes.formWidth}
                    placeholder="Enter Message..."
                    multiline
                    // rows={2}
                    // rowsMax={4}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            <TextField
                ref={dateInput}
                id="datetimelocal"
                label="Due Date"
                placeholder="Enter Date..."
                type="text"
                variant="outlined"
                className={classes.formWidth}
                value="22.04.2021 01:06"
            />
           </Grid>
            <Grid item xs={12} sm={12} md={12}>
                
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                qweqwe
            </Grid>
        </Grid>
    )
}

export default Task;