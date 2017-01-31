var React = require('react')
    , ListItem = React.createClass({
    render: function () {
        return (
            <li>
                <article>
                    <header>
                        <h3>{this.props.title}</h3>
                        <h4>{this.props.subtitle}</h4>
                    </header>

                    <footer>
                        <figure>
                            <img
                                srcSet={this.props.thumbnail}
                                alt={this.props.title}/>
                        </figure>
                    </footer>
                </article>
            </li>
        )
    }
});

module.exports = ListItem;