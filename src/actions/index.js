// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_ = 'FETCH_';
export const SUCCESS_ = 'SUCCESS_';
export const FAILURE_ = 'FAILURE_';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchPosts = () => dispatch => {
        dispatch({ type:FETCH_ })
        axios
        .get('https://swapi.co/api/people')
        .then(res => {
            dispatch({ type:SUCCESS_, payload:res.data })
                // console.log("axios data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_})
            console.log(err);
        })
}