import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

import generalKenobi from './assets/img/ben.jpg';

class App extends Component {
  state = {
    works: true
  };

  render() {
    return (
      <div>
        <img src={generalKenobi} width="500" />
        <h3> - General Kenobi!</h3>
      </div>
    );
  }
}

export default hot(module)(App);
