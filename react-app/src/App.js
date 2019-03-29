import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Project from "./components/Project";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4444/api/projects")
      .then(response => {
        this.setState(() => ({ projects: response.data }));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h2>Projects</h2>
        {this.state.projects.map(project => {
          return <Project description={project.description} key={project.id} />;
        })}
      </div>
    );
  }
}

export default App;
