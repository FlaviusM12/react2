// import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/react2">
              <Home/>
            </Route>
            <Route exact path="/react2/create">
              <Create/>
            </Route>
            <Route path="/react2/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/react2">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
