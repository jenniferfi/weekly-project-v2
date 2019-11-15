import React from 'react';
import {Button} from 'react-bootstrap';

const Topic = ({title, description, timetomaster, timespent, source, startlearningdate, inprogress, completiondate}) => {
  let inpr;
  if(inprogress === true) {
      inpr='In Progress'
  } else {
      inpr='Completed'
  }
  let startdate = new Date(startlearningdate).toLocaleDateString("fi-FI");
  let compdate = new Date(completiondate).toLocaleDateString("fi-FI");

/*   handleDelete = () => {
    this.props.deleteCallback(this.props.quote.id);
  } */
  return(
    <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{timetomaster}</td>
        <td>{timespent}</td>
        <td>{source}</td>
        <td>{startdate}</td>
        <td>{inpr}</td>
        <td>{compdate}</td>
        <td><Button variant="info" type="button" /* onClick={this.handleDelete} */>Delete</Button></td>
    </tr>
  )
};

export default Topic;