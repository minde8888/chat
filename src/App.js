import './App.scss';
import Profile from './componets/porfile/profile.jsx'


function App(props) {
  return (
    <div className="app-wraper">
      <Profile posts={props.state.chatMessages.posts} users={props.state.chatUsers.users} />
    </div>
  );
}

export default App;
