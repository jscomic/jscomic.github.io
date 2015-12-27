export const REQUEST_COMICS = 'REQUEST_COMICS';
export function requestComics() {
    return {
        type: REQUEST_COMICS
    };
}

export const RECEIVE_COMICS = 'RECEIVE_COMICS';
export function receiveComics(json) {
    return {
        type: RECEIVE_COMICS,
        comics: json
    };
}

export const SELECT_COMIC = 'SELECT_COMIC';
export function selectComic(slug) {
    return {
        type: SELECT_COMIC,
        slug
    }
}

/* thunk action creators */
export function fetchComics() {
    return function (dispatch, getState) {
        let state = getState();
        dispatch(requestComics());
        if (state.comics.comics.length == 0) {
            return fetch(window.assetsUrl + 'list.json')
                .then(response => response.json())
                .then(json => dispatch(receiveComics(json)));
        } else {
            return dispatch(receiveComics(state.comics.comics));
        }
    };
}

