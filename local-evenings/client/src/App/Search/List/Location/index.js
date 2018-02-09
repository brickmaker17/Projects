import React from 'react'

function Location(props) {
    let { name, hours, location, description, image } = props;
    return (
        <div>
            <input value={name}></input>
            <input value={hours}></input>
            <input value={location}></input>
            <input value={description}></input>
            <input value={image}></input>
        </div>
    )
}

export default Location;