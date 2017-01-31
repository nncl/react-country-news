var React = require('react')
    , ListManager = require('./ListManager.jsx')
    , News = React.createClass({
    render: function () {
        return (
            <ListManager />
        )
    }
});

module.exports = News;