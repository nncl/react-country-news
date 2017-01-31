var React = require('react')
    , ListItem = require('./ListItem.jsx')
    , List = React.createClass({
    render: function () {

        let createItem = function (item, index) {
            return <ListItem
                        title={item.title}
                        subtitle={item.subtitle}
                        thumbnail={item.thumbnail}
                        key={index}
                    />
        };

        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        )
    }
});

module.exports = List;