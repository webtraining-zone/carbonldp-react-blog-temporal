import React, {Component} from 'react';
import './App.css';
import Layout from './components/layout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';
import Editor from './components/editor';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/blog/posts/new" component={Editor}/>
              {/*<Route exact path="/:slug" component={Home}/>*/}
            </Switch>
          </Layout>
        </BrowserRouter>

    );
  }
}

export default App;
