import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
{/* {Header} */ }
{/* {Tinder Cards} */ }
{/* {Buttons below tinder cards} */ }

{/* {Chats screen} */ }
{/* {Individual chat screen} */ }