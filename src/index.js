import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './componets/redux/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = () => {

  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>
    </BrowserRouter>,document.getElementById('root')
  );
}
rerenderEntireTree()

// rerenderEntireTree(store.getState())
// store.subscribe(rerenderEntireTree);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });






