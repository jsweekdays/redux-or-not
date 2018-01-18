import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';

// components
import Home from '../Home'
import Menu from '../Menu'

// tasks
import Task1 from '../tasks/Task1'
import Task2 from '../tasks/Task2'
import Task3 from '../tasks/Task3'

// assets
import './assets/styles.css';

//store
import { store } from '../../redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <h1>Redux or not</h1>
        <br />

        <Menu />
        <br />
        <Route path="/" component={Home} exact />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
        <Route path="/task3" component={Task3} />
      </div>
    </Router>
  </Provider>
)

export default App
