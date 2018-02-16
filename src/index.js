import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NotesList from './components/notes.list';
import NoteForm from './components/note.form';
import BaseComponent from './components/base.component';


import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={BaseComponent}>
          <IndexRoute component={NotesList} />
          <Route path="/note/new" component={NoteForm} />
          <Route path="/note/edit/:note_id" component={NoteForm} />
        </Route>
      </Router>
    </Provider>
  </I18nextProvider>
  , document.getElementById('app'));
