import React, { Component } from 'react';

class Test extends Component {
    state = { posts: [] }

    componentDidMount = () => {
        fetch('/api/topics')
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                this.setState({ posts: posts })
            })
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Test;