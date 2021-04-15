import './App.css';
import { Switch, Route } from "react-router-dom";
import User from "./component/user/user.component";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { getAllUsers } from './redux/action/user/user.action'
// Testing 123
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  },[])
  return (
    <div className="App">
      Hello
      <Switch>
        <Route exact path='/users' component={User}/>
      </Switch>
    </div>
  );
}

export default App;
