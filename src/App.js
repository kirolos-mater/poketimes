import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}


export default App;
