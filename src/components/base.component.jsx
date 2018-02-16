import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { setLocale } from 'react-redux-i18n';
import { connect } from 'react-redux';


class BaseComponent extends React.Component {

    render() {
        const { dispatch, lang } = this.props;
        console.log(lang);
        return (<div>
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/#/">BSC Notes</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem onClick={e => dispatch(setLocale("CS"))}>Česky</NavItem>
                    <NavItem onClick={e => dispatch(setLocale("EN"))}>English</NavItem>
                </Nav>
            </Navbar>
            <div id="main">
                {this.props.children}
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        lang: state.lang
    };
}

export default connect(mapStateToProps)(BaseComponent);
