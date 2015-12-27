import { REQUEST_COMICS, RECEIVE_COMICS, SELECT_COMIC } from './actions';
import _ from 'underscore';

function comics(state = {
    isFetching: false,
    comics: [],
    activeComic: {}
}, action = {}) {
    switch (action.type) {
        case REQUEST_COMICS: 
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_COMICS: 
            return Object.assign({}, state, {
                isFetching: false,
                comics: action.comics
            })
        case SELECT_COMIC:
            let activeComic = _.findWhere(state.comics, {slug: action.slug});
            return Object.assign({}, state, {
                activeComic
            });
            break;
        default:
            return state;
    }
};

module.exports = {
    comics
};