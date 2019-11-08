import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TopicList from './components/TopicList';
import Navigation from './components/Navigation';
import TopicForm from './components/TopicForm';
import Index from './components/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="MainContent">
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/topics' exact component={TopicList}/>
        <Route path='/form' component={TopicForm}/>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
