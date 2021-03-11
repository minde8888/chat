import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import state, {addMessage, subscribe, updateText} from './componets/redux/state';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addMessage={addMessage} updateText={updateText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

}
rerenderEntireTree(state)
subscribe(rerenderEntireTree);






