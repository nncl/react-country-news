/**
 * @description
 * It's not really a component, it's more like a route manager
 */

var React = require('react'),
    ReactRouter = require('react-router'), // packaged
    Router = ReactRouter.Router,
    Route = ReactRouter.Route, // For a specific page
    Base = require('./components/Base.jsx'),
    News = require('./components/News.jsx'),
    Photos = require('./components/Photos.jsx'),
    CreateHistory = require('history'),
    History = new CreateHistory.createHashHistory();

// Let's create a header that appears on every page
var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/news" component={News}/>
            <Route path="/photos" component={Photos}/>
        </Route>
    </Router>
);

module.exports = Routes;