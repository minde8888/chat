import { Route } from 'react-router';
import './App.scss';
import Login from './componets/login/login';
import Main from './componets/main/main.jsx'


function App(props) {
  return (
    <div className="app-wraper">
      <Route path="/login" render={() => <Login />} />
      <Main store={props.store} />
    </div>
  );
}

export default App;
