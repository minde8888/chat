import './App.scss';
import Profile from './componets/porfile/profile.jsx'


function App(props) {
  return (
    <div className="app-wraper">
      <Profile store={props.store} />
    </div>
  );
}

export default App;
