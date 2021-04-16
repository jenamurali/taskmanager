import './App.css';
import { Switch, Route } from "react-router-dom";
import User from "./component/user/user.component";
import Task from "./component/task/task.component";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllUsers } from './redux/action/user/user.action';
import { Header } from "./component/header/header.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>        
        <Route exact path='/users' component={User} />
        <Route exact path='/task' component={Task} />
      </Switch>
    </div>
  );
}

export default App;
