var React = require('react')
    , List = require('./List.jsx')
    , ListManager = React.createClass({
    getInitialState: function () {
        return {
            items: [
                {
                    title: "First New"
                    , subtitle: "First Subtitle"
                    , thumbnail: "http://www.dummyimage.com/100x100"
                }
            ]
        }
    },
    render: function () {
        return (
            <List items={this.state.items}/>
        )
    }
});

module.exports = ListManager;