// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';

// class Jobs extends React.Component {
//   state = {
//     jobs: []
//   };

//   async componentDidMount() {
//     const response = await fetch('/jobs');
//     const body = await response.json();
//     console.log("Body");
//     console.log(body);
//     this.setState({ jobs: body });
//   }

// const JobsList = () => {
//   const { jobs } = this.state;
//   console.log("Jobs");
//   console.log(jobs);

//   const jobsArr = jobs[0];
//   console.log("jobsArr");
//   console.log(jobsArr);

//   return (
//     <div>
//       <ul>{jobsArr.map(job => <li key={job.id}> {job.title}</li>)}</ul>
//     </div>
//   )
// }

// }

// export default JobsList;

