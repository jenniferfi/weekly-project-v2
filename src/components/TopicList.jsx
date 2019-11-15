import React, { Component } from 'react';
import Topic from './Topic';
import {Table} from 'react-bootstrap';
import {deleteTopicWithId, fetchAllTopics} from '../service/apiclient';

class TopicList extends Component {
    state = { topics: [] }

    componentDidMount = () => {
        this.getTopicList();
    }
    getTopicList =()=>{
      fetchAllTopics().then(topics=>{
        this.setState({topics});
      })
    }
    deleteTopic = id => {
      deleteTopicWithId(id).then(vastaus => {
        this.getTopicList();
      })
    }
    render() {
      const topicItems = this.state.topics.map((topic)=>{
        return <Topic {...this.props} deleteCallback={this.deleteTopic} topic={topic} key={topic.id} />
      });
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
            <tbody>
              {topicItems}
            </tbody>
        </Table>
      );
    }
  }

export default TopicList;