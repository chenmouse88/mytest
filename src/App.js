import React from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './main';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}




export default App;
