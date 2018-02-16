import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NotesList from './components/notes.list';
import NoteForm from './components/note.form';

class BaseComponent extends React.Component {
  render() {
    return this.props.children;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={BaseComponent}>
        <IndexRoute component={NotesList} />
        <Route path="/note/new" component={NoteForm} />
        <Route path="/note/edit/:note_id" component={NoteForm} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
