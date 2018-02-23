import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIssue } from '../../redux/issues.js';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                "title": '',
                "description": ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addIssue(this.state.inputs);
        this.clearInputs()
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState(() => {
            return {
                inputs: {
                    "title": '',
                    "description": '',
                }
            }
        })
    }
    render(){
        let { title, description } = this.state.inputs;
        // console.log(this.state.inputs);
        return(
            <div>
                <h1>Add a Issue</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Title:</p>
                    <input onChange={this.handleChange} name="title" value={title} type="text" placeholder="Title..."/>
                    <p>Description:</p>
                    <input onChange={this.handleChange} name="description" value={description} type="text" placeholder="Description..."/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state => {
    return {
        issues: state.issues
    }
})
export default connect(mapStateToProps, { addIssue })(Post);