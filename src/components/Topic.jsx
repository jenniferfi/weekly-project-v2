import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Topic extends Component {
  handleDelete = () => {
    this.props.deleteCallback(this.props.topic.id);
  }  
  render() {
    const { title, description, timetomaster, timespent, source, startlearningdate, inprogress, completiondate } = this.props.topic;

    let inpr;
    if (inprogress === true) {
      inpr = 'In Progress'
    } else {
      inpr = 'Completed'
    }

    let startdate = new Date(startlearningdate).toLocaleDateString("fi-FI");
    let compdate = new Date(completiondate).toLocaleDateString("fi-FI");

    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{timetomaster}</td>
        <td>{timespent}</td>
        <td>{source}</td>
        <td>{startdate}</td>
        <td>{inpr}</td>
        <td>{compdate}</td>
        <td><Button variant="info" type="button" onClick={this.handleDelete} >Delete</Button></td>
      </tr>
    );
  }
}

export default Topic;