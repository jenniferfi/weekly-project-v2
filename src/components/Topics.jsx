import React from 'react';
import Topic from './Topic';

const Topics = ({ topics }) => {

  const topicrows = topics.map(topic => <Topic title={topic.title} description={topic.description} timetomaster={topic.timetomaster} timespent={topic.timespent} source={topic.source} startlearningdate={topic.startlearningdate} inprogress={topic.inprogress} completiondate={topic.completiondate} key={topic.id} />)

  return (
    <tbody>
      {topicrows}
    </tbody>
  )
}

export default Topics;