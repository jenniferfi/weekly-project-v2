import React, { Component } from 'react';
import Topics from './Topics';

class TopicList extends Component {
    state = { topics: [] }

    componentDidMount = () => {
      fetch('/api/topics')
        .then(res => res.json())
        .then(topics => {
          this.setState({topics: topics})
        })
    }
  
    render() {
      return (
        <table>
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
          <Topics topics={this.state.topics}/>
        </table>
      );
    }
  }

export default TopicList;