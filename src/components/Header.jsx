import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  handleMenu = () => {
    this.setState(previusState => ({
      isMenuOpen: !previusState.isMenuOpen
    }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4" to="/">
              CarlosKvasir.dev
            </Link>
            <button
              className={`navbar-burger ${burgerClass}`}
              type="button"
              aria-label="menu"
              onClick={this.handleMenu}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              <Link className="navbar-item is-size-5" to="/" onClick={this.closeMenu}>
                Home
              </Link>
              <Link className="navbar-item is-size-5" to="/projects" onClick={this.closeMenu}>
                Projects
              </Link>
              <Link className="navbar-item is-size-5" to="/posts" onClick={this.closeMenu}>
                Posts
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };
}

//Header.propTypes = {
//  siteTitle: PropTypes.string
//};
//
//Header.defaultProps = {
//  siteTitle: ''
//};

export default Header;
