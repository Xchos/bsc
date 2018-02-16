import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { setLocale, I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';


class BaseComponent extends React.Component {

    render() {
        const { dispatch, i18n } = this.props;
        return (<div>
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/#/">BSC Notes</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {/* @TODO: language switch
                    <Nav pullRight>
                    <NavItem onClick={e => dispatch(setLocale("CS"))}>Česky</NavItem>
                    <NavItem onClick={e => dispatch(setLocale("EN"))}>English</NavItem>
                </Nav>*/}
            </Navbar>
            <div id="main">
                {this.props.children}
            </div>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        i18n: state.i18n
    };
}

export default connect(mapStateToProps)(BaseComponent);
