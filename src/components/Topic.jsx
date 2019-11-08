import React from 'react';
import {Button} from 'react-bootstrap';

const Topic = ({title, description, timetomaster, timespent, source, startlearningdate, inprogress, completiondate}) => {
    let inpr;
    if(inprogress === true) {
        inpr='In Progress'
    } else {
        inpr='Completed'
    }
  return(
    <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{timetomaster}</td>
        <td>{timespent}</td>
        <td>{source}</td>
        <td>{startlearningdate}</td>
        <td>{inpr}</td>
        <td>{completiondate}</td>
        <td><Button>Delete</Button></td>
    </tr>
  )
};

export default Topic;