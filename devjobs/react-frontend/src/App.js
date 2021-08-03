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
    console.log("Body");
    console.log(body);
    this.setState({jobs: body});
  }

  render() {
    const {jobs} = this.state;
    console.log("Jobs");
    console.log(jobs);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients and Java</h2>
              {jobs.map(jobs =>
                  <div key={jobs[0].id}>
                    {jobs[0].description} ({jobs[0].title})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;