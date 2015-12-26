import React from 'react';
import { render } from 'react-dom';
import ComicModal from './ComicModal';
import { Router, Route, Link } from 'react-router';

let assetsUrl = 'http://jscomic.github.io/assets/'

let comicList = [
    {
        slug: 'react-komik',
        caption: 'captions/react-komik.jpg',
        comic: 'comics/react-komik.png',
    }
];

let ComicApp = (props) => (
    <div>           
        <div className="row">
            <div className="col-sm-6 portfolio-item">
                <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                    <div className="caption">
                        <div className="caption-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="img/captions/reactkomik.jpg" className="img-responsive" alt="" />
                </a>
            </div>
        </div>
        {props.children}
    </div>
);

let AppRoutes = (props) => (
    <Router>
        <Route path="/" component={ComicApp}>
            <Route path="comic/:id" component={ComicModal} />
        </Route>
    </Router>
);

render(<AppRoutes />, document.getElementById('ComicApp'));

