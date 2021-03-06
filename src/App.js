import './App.css';
import { Switch, Route } from "react-router-dom";
import User from "./component/user/user.component";
import Task from "./component/task/task.component";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllUsers } from './redux/action/user/user.action';
import { Header } from "./component/header/header.component";
import { Grid, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  containerPadding: {
      marginTop: "15px",
  }
});

function App() {
  const classes = useStyles()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" className={classes.containerPadding}>
        <Grid container spacing={4} justify="center">
          <Switch>
            <Route exact path='/users' component={User} />
            <Route exact path='/task' component={Task} />
          </Switch>
        </Grid>
        </Container>
    </div>
  );
}

export default App;
