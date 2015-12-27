import React from 'react';
import { connect } from 'react-redux';
import { fetchComics } from './actions'; 
import { Link } from 'react-router';

class ComicApp extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComics());
    }
    render() {
        var comicList = this.props.comics.map(item => (
            <div key={item.slug} className="col-sm-6 portfolio-item">
                <Link className="portfolio-link" to={`/comic/${item.slug}`}>
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={`${window.assetsUrl}/captions/${item.caption}`} className="img-responsive" alt="" />
                </Link>
            </div>
        ));
        return (
            <div>
                <div className="row">
                    {comicList}                    
                </div>
                {this.props.children}
            </div>
        );
    }
}

ComicApp.defaultProps = {
    comics: []
}

let mapStateToProps = (state) => {
    let {isFetching, comics} = state.comics;
    return {isFetching, comics};
}

module.exports = connect(mapStateToProps)(ComicApp);