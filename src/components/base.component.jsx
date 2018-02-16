import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class BaseComponent extends React.Component {

    render() {
        return (<div>
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/#/">BSC Notes</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <div id="main">
                {this.props.children}
            </div>
        </div>);
    }
}