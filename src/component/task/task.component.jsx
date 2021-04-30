import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid, TextField, makeStyles, Select, FormControl, InputLabel, MenuItem, Button } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import moment from "moment";
import { useHistory } from "react-router-dom";
import "jquery-datetimepicker";
import jquery from "jquery";
import { CreateTask } from '../../redux/task/task.action'
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    textareaWidth: {
        width: "100% !important",
    },
    formmargin: {
        margin: '10px 0',
        position: "relative"
    },
    buttonclass: {
        position: "absolute",
        transform: "translate(-30px, 15px)",
        height: "100%",
        fontSize: 25
    },
    root: {
        '& > *': {
            margin: "0 0 0 4px",
        },
    },
}))
const Task = () => {
    const dateInput = useRef(null);
    const dispatch = useDispatch();
    let history = useHistory();
    const allUsers = useSelector(state => state.users.allUsers);
    const isTaskCreated = useSelector(state => state.task.payload);
    let users = [];
    users = allUsers.map(val => val.name);
    debugger
    const [state, setState] = useState({
        message: '',
        priority: '',
        // assignee: ''
    });
    const [assignee, setAssignee] = useState(null);
    const [inputassignee, setInputassignee] = useState("");

    const [dueDate, setdueDate] = useState("");
    let classes = useStyles();
    useEffect(() => {
        jquery('#datetimelocal').datetimepicker({
            format: 'd.m.Y H:i',
            lang: 'ru',
            onChangeDateTime: function (value) {
                setdueDate(value ? moment(value).format("DD-MMM-YYYY HH:mm") : "");
            },
            minDate: moment().format("YYYY/MM/DD")
        });
    }, []);
    useEffect(() => {
        console.log(isTaskCreated)
        if(isTaskCreated){
            console.log("created")
            swal("Good job!", "Your task has been created.", "success").then(() => history.push("/"));
        }
    },[isTaskCreated])
    return (
        <Grid container item xs={12} sm={12} md={6} >
            <Grid item xs={12} sm={12} md={12} className={classes.formmargin}>
                <TextField
                    label="Message" variant="outlined"
                    className={classes.textareaWidth}
                    placeholder="Enter Message..."
                    multiline
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                    value={state.message}
                // rows={2}
                // rowsMax={4}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.formmargin}>
                <TextField
                    inputRef={dateInput}
                    id="datetimelocal"
                    label="Due Date"
                    placeholder="Enter Date..."
                    type="text"
                    variant="outlined"
                    className={classes.textareaWidth}
                    onChange={(e) => setdueDate(e.target.value)}
                    value={dueDate}
                    autoComplete="false"
                />
                {/* <button className={classes.buttonclass + " fa fa-plus-circle"} /> */}
                <i
                    className={classes.buttonclass + " fas fa-calendar-week"}
                    onClick={(e) => {
                        dateInput.current.focus();
                    }}
                ></i>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.formmargin}>
                <FormControl variant="outlined" className={classes.textareaWidth}>
                    <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setState({ ...state, priority: e.target.value })}
                        value={state.priority}
                        label="Priority"
                    >
                        <MenuItem value="">
                            <em>Please select...</em>
                        </MenuItem>
                        <MenuItem value={1}>Normal</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.formmargin}>
                <Autocomplete
                    value={assignee}
                    onChange={(event, newassignee) => {
                        setAssignee(newassignee);
                    }}
                    inputValue={inputassignee}
                    onInputChange={(event, newInputassignee) => {
                        setInputassignee(newInputassignee);
                    }}
                    id="controllable-states-demo"
                    options={users}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Assignee" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} className={classes.formmargin + " " + classes.root} 
                container
                direction="row-reverse"
                justify="flex-start"
                alignItems="center"
            >
                <Button variant="contained" color="secondary" onClick={() => history.push("/")}>
                    Cancle
                </Button>
                <Button variant="contained" color="primary" onClick={() => 
                    dispatch(CreateTask({
                        message : state.message,
                        priority : state.priority,
                        assignee,
                        dueDate
                    }))
                }>
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default Task;