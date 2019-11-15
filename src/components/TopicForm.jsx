import React, { Component } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {postTopic} from '../service/apiclient';

class TopicForm extends Component {
    state = {title:'', description:'', timetomaster:'', timespent:'', source:'', startlearningdate:'', inprogress: true, completiondate:''}
    
    //Input values:
    handleTitleChange =(e) => {this.setState({title: e.target.value}); }
    handleDescriptionChange =(e) => {this.setState({description: e.target.value}); }
    handleTtmChange =(e) => {this.setState({timetomaster: e.target.value}); }
    handleTsChange =(e) => {this.setState({timespent: e.target.value}); }
    handleSourceChange =(e) => {this.setState({source: e.target.value}); }
    handleSldChange =(e) => {this.setState({startlearningdate: e.target.value}); }
    toggleCheckbox=(e) => {
        this.setState({inprogress: !this.state.inprogress}); }
    handleCompdChange =(e) => {this.setState({completiondate: e.target.value}); }

    //Button function:
    handleCreateClick = (e) => {
        e.preventDefault();
        
        console.log(this.state);
        postTopic(this.state)
        .then(res =>{
            this.setState({title:'', description:'', timetomaster:'', timespent:'', source:'', startlearningdate:'', inprogress: true, completiondate:''});
        })
        .then(console.log("Topic added."));
    }

    render() {
        return (
        <Container className="formContainer">
            <h1>Add Topic</h1>
            <p>This form is under construction and doesn't do anything.</p>
            <Form className="form">
                <Form.Group>
                    <Form.Label htmlFor="form_title">Title</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Title" id="form_title"
                        value={this.state.title} onChange={this.handleTitleChange}
                        required="required"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="form_description">Description</Form.Label>
                    <Form.Control size="sm" as="textarea" rows="3" placeholder="Describe your topic..." id="form_description"
                        value={this.state.description} onChange={this.handleDescriptionChange} />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="form_ttm">Time to Master</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="0" id="form_ttm"
                        value={this.state.timetomaster} onChange={this.handleTtmChange}></Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="form_ts">Time Spent</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="0" id="form_ts"
                    value={this.state.timespent} onChange={this.handleTsChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="form_source">Source</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Source" id="form_source"
                        value={this.state.source} onChange={this.handleSourceChange}
                    ></Form.Control>
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="form_sld">Start Learning Date</Form.Label>
                    <Form.Control size="sm" type="date" id="form_sld"
                    value={this.state.startlearningdate} onChange={this.handleSldChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="form_inprog">
                    <Form.Check type="checkbox" label="In Progress" value={this.state.inprogress} onClick={this.toggleCheckbox} defaultChecked={true} />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor="form_compd">Completion Date</Form.Label>
                    <Form.Control size="sm" type="date" id="form_compd"
                    value={this.state.completiondate} onChange={this.handleCompdChange}></Form.Control>
                </Form.Group>
                <Button variant="outline-info" type="submit" onClick={this.handleCreateClick}>Add Topic</Button>
            </Form>
        </Container>
        );
    }
}

export default TopicForm;