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
                <nav>
                    <ul>
                        <li>
                            <Link
                                activeClassName="m-link--active"
                                to="/page1">Page 1</Link>
                        </li>
                        <li>
                            <Link
                                activeClassName="m-link--active"
                                to="/page2">Page 2</Link>
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