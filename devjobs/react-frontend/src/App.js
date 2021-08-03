import React from 'react';
import JobPost from "./JobPost"
import List from "@material-ui/core/List";



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
      <List>
        {this.getJobs()}
      </List>
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
            />
      );
   }

  }
export default App;