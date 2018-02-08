import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../../redux/locations.js';

const mapStateToProps = (state => {
    return {
        locations: state.locations
    }
})

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                "name": '',
                "hours": '',
                "location": '',
                "description": '',
                "image": ''
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addLocation(this.state.inputs)
    }
    clearInputs(){
        this.setState(() => {
            return{
                inputs: {
                    "name": '',
                    "hours": '',
                    "location": '',
                    "description": '',
                    "image": ''
                }
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Add a Business</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Name:</p>
                    <input name="name" type="text" placeholder="The Complex"/>
                    <p>Hours:</p>
                    <input name="hours"/>
                    <p>Address:</p>
                    <input name="location" type="text"/>
                    <p>Description</p>
                    <input name="description" type="text"/>
                    <p>Image Upload:</p>
                    <input name="image" type="file"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, {addLocation})(Add);