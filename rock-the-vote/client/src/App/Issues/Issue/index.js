import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editIssue, removeIssue } from '../../../redux/issues';

class Issue extends Component {
    constructor(props){
        super(props);
       
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.removeIssue(this.props._id);
        // console.log(this.props)
    }
    handleEdit(e){
        let {name}=e.target
        if (name=== "upvote"){
            this.props.editIssue(this.props._id, this.props.upvote +1, "upvote")
            this.props.editIssue(this.props._id, this.props.totalvotes +1, "totalvotes")
        } else {
            this.props.editIssue(this.props._id, this.props.downvote +1, "downvote")
            this.props.editIssue(this.props._id, this.props.totalvotes +1, "totalvotes")

        }
        
        console.log(this.props.upvote);
    }
    
    render(){
        let { title, description, downvote, upvote, totalvotes } = this.props;
        console.log(this.props);
        return(
            <div>
                <h2>{title}</h2>
                <p>Description: {description}</p>
                <button onClick={this.handleEdit}name = "downvote">Down {downvote}</button>
                <button onClick={this.handleEdit} name="upvote">Up {upvote}</button>
                <p>Totalvotes: {totalvotes}</p>
                <button onClick={this.handleDelete}>Delete Post</button>
                <button>Comment</button>
            </div>
        )
    }
}

const mapStateToProps = (state => {
    return state.issues
})

export default connect(mapStateToProps, { editIssue, removeIssue })(Issue);