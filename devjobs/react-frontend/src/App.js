import React from 'react';
import JobPost from "./JobPost"
import List from "@material-ui/core/List";
import Form from "./Form"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "./App.css";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.getJobs = this.getJobs.bind(this);
  }
  
  state = {
  jobs: [],
    };

    
  async componentDidMount() {
    const response = await fetch('/jobs');
    const body = await response.json();
    this.setState({jobs: body[0]});

  }
  
  render(){
    return (
      <div className="App">
        <Form />

      <React.Fragment>
      <CssBaseline />
        <Container fixed>
          <List>
            {this.getJobs()}
          </List>
        </ Container>
      </React.Fragment>

      </div>
    );
  }
      
      getJobs() {
        const {jobs} = this.state;
        return jobs.map(job =>
          <JobPost
            key={job.id}
            jobTitle={job.title}
            jobId={job.id}
            jobDescription={job.description}
            jobURL={job.redirect_url}
            jobDate={job.created}
            jobSalaryMin={job.salary_min}
            />
      );
   }

  }
export default App;