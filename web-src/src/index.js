import config from './config.json'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Menu from './components/menu.jsx';
import CreateOffer from './components/create_offer'
import CreateActivity from './components/create_activity';
import ListOffers from './components/list_offer';
import Home from './components/home';


const height200 = {
  height: '600px'
};
const width340 = {
  width: '340px'
};
const flex = {
  flex: 1,
  margin: '20px'
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="spectrum-SplitView spectrum-SplitView--horizontal" style={height200}>
          <div className="spectrum-SplitView-pane" style={width340}><Menu /></div>
          <div className="spectrum-SplitView-splitter"></div>
          <div className="spectrum-SplitView-pane" style={flex}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/create_activity' component={CreateActivity} />
              <Route path='/list_offers' component={ListOffers} />
              <Route path='/create_offer' component={CreateOffer} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
