/**
 * @description
 * It's kind the container, main file/code; basically anything you want to
 * show up on every page should be here
 */

var React = require('react')
    , Link = require('react-router').Link
    , Base = React.createClass({
    render: function () {
        return (
            <section>
                <header>
                    <h1>Country News</h1>
                    <h2>Top stories in my country</h2>
                </header>

                <nav>
                    <ul>
                        <li>
                            <Link
                                activeClassName="m-link--active"
                                to="/news">News</Link>
                        </li>
                        <li>
                            <Link
                                activeClassName="m-link--active"
                                to="/photos">Photos</Link>
                        </li>
                    </ul>
                </nav>

                {this.props.children}
                <footer><h1>Footer</h1></footer>
            </section>
        )
    }
});

module.exports = Base;