import React, { Component } from 'react';
import Topics from './Topics';
import {Table} from 'react-bootstrap';
import {deleteTopicWithId} from '../service/apiclient';

class TopicList extends Component {
    state = { topics: [] }

    componentDidMount = () => {
      fetch('/api/topics')
        .then(res => res.json())
        .then(topics => {
          this.setState({topics: topics})
        })
    }
    deleteTopic = id => {
      deleteTopicWithId(id).then(vastaus => {
          this.getQuoteList();
      })
    }
    render() {
      return (
        <Table striped hover responsive="sm">
            <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Time to Master</th>
                <th>Time Spent</th>
                <th>Source</th>
                <th>Start Learning Date</th>
                <th>In Progress</th>
                <th>Completion Date</th>
                </tr>
            </thead>
          <Topics topics={this.state.topics} deleteCallback={this.deleteTopic}/>
        </Table>
      );
    }
  }

export default TopicList;