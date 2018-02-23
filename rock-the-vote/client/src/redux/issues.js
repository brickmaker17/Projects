import axios from 'axios';

const issuesUrl = '/issues/';

const issuesReducer = (issues = { data: [], loading: true }, action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            return {
                data: [...issues.data, action.data],
                loading: false
            }
        case 'EDIT_ISSUE':
            return {
                // ...issues,
                data: issues.data.map((issue) => {
                    if (issue._id === action.id) {
                        return action.updatedIssue;
                    } else {
                        return issue;
                    }
                })
            }
        case 'REMOVE_ISSUE':
            return {
                ...issues,
                data: issues.data.filter((issue, i) => {
                    return i !== action.index;
                })
            }
        case 'GET_ISSUES':
            return {
                data: action.data,
                loading: false
            }
        default:
            return issues;
    }
}

export const addIssue = (inputs) => {
    return dispatch => {
        axios.post(issuesUrl, inputs)
            .then(response => {
                let {data} = response
                // console.log(data)
                dispatch({
                    type: 'ADD_ISSUE',
                    data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

}
export const getIssues = () => {
    return dispatch => {
        axios.get(issuesUrl)
            .then(response => {
                let {data} = response
                dispatch({
                    type: 'GET_ISSUES',
                    data
                })
            })
    }
}
export const editIssue = (id, vote, voteType) => {
    return function (dispatch) {
        axios.put(issuesUrl + id, {[voteType]:vote})
            .then(response => {
                dispatch({
                    type: 'EDIT_ISSUE',
                    updatedIssue: response.data,
                    id
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
}
export const removeIssue = (id) => {
    return function (dispatch) {
        axios.delete(issuesUrl + id, id)
            .then(response => {
                dispatch({
                    type: 'REMOVE_ISSUE',
                    id
                })
            })

    }
}

export default issuesReducer;
