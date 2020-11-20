import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
        <div className="app_body">
          {/* <Sidebar />
          <Chat /> */}
          <Router>
            <Switch>
              <Sidebar />
              <Chat />
              <Route path="/rooms/:roomId/">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
