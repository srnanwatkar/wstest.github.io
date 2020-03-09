import React, { Component, Fragment } from 'react';
import Dashboard from './components/Dashboards';
import Loader from './components/Loader';
import ErrorHandler from './components/ErrorHandler';
import './scss/index.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      info: null
    }
  }

  /**
   * Handle Component Errors
   * @param error 
   * @param info 
   */
  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
  }


  render() {
    return (
      <div className='app-container'>
        {
          this.state.error ?
            <div>
              Something went wrong.....
                {this.state.info} : {this.state.error}
              {/* <p>{this.props.info}</p> */}
            </div> :
            <Fragment>
              {/* Loader */}
              <Loader />
              {/* Dashboard Container */}
              <Dashboard />
            </Fragment>
        }
      </div>
    );
  }
}

export default App;