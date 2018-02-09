import React, { Component } from 'react';
import Location from "./Location";

import { connect } from 'react-redux';
// import {Switch, Route} from 'react-router-dom';
import { getLocations } from '../../../redux/locations';



class List extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputs: {
    //             search: ""
    //         }
    //     }
    // }
    componentWillReceiveProps() {
        this.props.getLocations()
    }

    // componentDidMount() {
    //     this.props.getLocations()
    // }

    render() {
        // let {name, hours, location, description, image} = this.state.inputs;
        let { loading, data, search } = this.props;
        const locations = data
        .filter(location => {
            return location.name.toLowerCase().includes(search);
            //return the location object if it matches the search term
        })
        .map(location => {
            return <Location key={location._id} {...location} />
        })
        return (
            loading ?
                <div>
                    loading...
                </div>
                :
                <div>
                    {locations}
                </div>
        )
    }
}

const mapStateToProps = (state => {
    return state.locations
})

export default connect(mapStateToProps, { getLocations })(List)