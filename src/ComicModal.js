import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { selectComic, fetchComics } from './actions';

class ComicModal extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        let { slug } = this.props.params;
        document.body.className = "modal-open";
        dispatch(fetchComics);
        dispatch(selectComic(slug));
        setTimeout(() => {
            FB.XFBML.parse();    
        });
    }
    componentWillReceiveProps(nextProps) {
        let { slug } = this.props.params;
        if (nextProps.comics !== this.props.comics) {
            const { dispatch } = nextProps;
            dispatch(selectComic(slug));
        }
    }
    back() {
        document.body.className = "index";
        this.context.history.pushState(null, '/');
    }
    render() {
        let { activeComic } = this.props;
        let currentUrl = window.location.href.split('?')[0];
        return (
            <div>
                <div className="portfolio-modal modal modal-open fade in" id="portfolioModal1" role="dialog" aria-hidden="true" style={{zIndex: '9999 !important', display: 'block'}}>
                    <div className="modal-content">
                        <div className="close-modal" onClick={this.back.bind(this)}>
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>{activeComic.title}</h2>
                                        <hr className="star-primary" />
                                        <div>
                                            <img src={`${window.assetsUrl}/images/${activeComic.image}`} className="img-responsive img-centered" alt="" style={{width: '100%', maxWidth: '640px'}} />
                                        </div>
                                        <p>{activeComic.description}</p>
                                        <div>
                                            <div className="fb-comments" data-href={currentUrl} data-width="100%" data-numposts="10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ComicModal.contextTypes = {
    history: React.PropTypes.object
};

let mapStateToProps = (state) => {
    let {activeComic, comics} = state.comics;
    return {activeComic, comics};
}

module.exports = connect(mapStateToProps)(ComicModal);
