import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../../redux/locations';


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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addLocation(this.state.inputs)
        // console.log(addLocation)
        this.clearInputs()
    }
    handleChange(e) {
        let {name, value} = e.target;
            this.setState((prevState) => {
                return {
                    inputs: {
                        ...prevState.inputs,
                        [name]: value
                    }
                }
            })
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
        let {name, hours, location, description, image} = this.state.inputs;
        // console.log(this.props)
        return(
            <div>
                <h1>Add a Business</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Name:</p>
                    <input onChange={this.handleChange} value ={name} name="name" type="text" placeholder="The Complex"/>
                    <p>Closing Hours:</p>
                    <input onChange={this.handleChange} value={hours} name="hours" type="text" placeholder="12:00AM"/>
                    <p>Address:</p>
                    <input onChange={this.handleChange} value={location} name="location" type="text" placeholder="123 Fake Stree"/>
                    <p>Description</p>
                    <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Fun place greate for partys"/>
                    <p>Image Upload:</p>
                    <input name="image" type="file"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default connect(mapStateToProps, {addLocation})(Add);