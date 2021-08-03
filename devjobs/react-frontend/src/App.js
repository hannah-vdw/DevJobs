import React from 'react';
import JobPost from "./JobPost"
import List from "@material-ui/core/List";



class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.getJobs = this.getJobs.bind(this);
  }
  
  state = {
  jobs: []
    };


  
  async componentDidMount() {
    const response = await fetch('/jobs');
    const body = await response.json();

    console.log("Body");
    console.log(body);

    console.log("Body.[0]");
    console.log(body[0]);

    const bodyArray = body[0];
    console.log("bodyArray");
    console.log(bodyArray);

    console.log("bodyArray.[0]");
    console.log(bodyArray[0]);

    console.log("bodyArray[0].title");
    console.log(bodyArray[0].title);

    this.setState({jobs: body});
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
        console.log("Jobs in GET JOBS [0]");
        console.log(jobs[0]);
        return jobs.map(job =>
          <JobPost
            key={job.id}
            jobTitle={job.tile}
            jobId={job.id}
            jobDescription={job.description}
            />
      );
   }

  }
export default App;