import axios from 'axios';

const locationUrl = '/locations/'

const locationsReducer = (locations = { data: [], loading: true }, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {
                data: [...locations.data, action.location],
                loading: false
            }
        case 'EDIT_LOCATION':
            return {
                ...locations,
                data: locations.data.map((location, i) => {
                    if (i === action.index) {
                        return action.updatedLocation;
                    } else {
                        return location;
                    }
                })
            }
        case 'REMOVE_LOCATION':
            return {
                ...locations,
                data: locations.data.filter((location, i) => {
                    return i !== action.index;
                })
            }
        default:
            return locations;
    }
}

export const addLocation = (location) => {
    return function (dispatch) {
        axios.post(locationUrl, location)
            .then(response => {
                dispatch({
                    type: 'ADD_LOCATION',
                    location
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

}
export const editLocation = (updatedLocation, id) => {
    return function (dispatch) {
        axios.put(locationUrl + id, updatedLocation)
            .then(response => {
                dispatch({
                    type: 'EDIT_LOCATION',
                    updatedLocation,
                    id
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
}
export const removeLocation = (id) => {
    return function (dispatch) {
        axios.delete(locationUrl + id, id)
            .then(response => {
                dispatch({
                    type: 'REMOVE_LOCATION',
                    id
                })
            })

    }
}

export default locationsReducer;