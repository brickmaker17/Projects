import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues } from '../../redux/issues';
import Issue from '../Issues/Issue/index';

class Issues extends Component {
    componentDidMount() {
        this.props.getIssues();
    }
    render() {
        let { data } = this.props;
        // console.log(this.props.data);
        const IssueMap = data
            .sort((a, b)=>b.totalvotes - a.totalvotes)
            .map((issue, i) => {
            return <Issue {...issue} key={i}></Issue>
       })
        return (
            <div>
                {IssueMap}
            </div>
        )
    }
}

const mapStateTotProps = (state => {
    return state.issues
})

export default connect(mapStateTotProps, { getIssues})(Issues);