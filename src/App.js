import './App.scss';
import Main from './componets/main/main.jsx'


function App(props) {
  return (
    <div className="app-wraper">
      <Main store={props.store} />
    </div>
  );
}

export default App;
