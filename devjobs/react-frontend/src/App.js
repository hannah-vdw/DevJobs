import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    jobs: []
  };

  async componentDidMount() {
    const response = await fetch('/jobs');
    const body = await response.json();
    this.setState({jobs: body});
  }

  render() {
    const {jobs} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {jobs.map(jobs =>
                  <div key={jobs.id}>
                    {jobs.description} ({jobs.title})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;