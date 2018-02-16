import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notesService } from '../services/notes.service';

import { updateNote, createNote } from '../actions/notes.action';

import { Grid, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { hashHistory } from "react-router";

class NoteForm extends Component {

  state = {
    note: {
      title: ""
    }
  }

  handleChange = e => {
    const { note } = this.state;
    this.setState({
      note: {
        ...note,
        title: e.target.value
      }
    });
  }

  componentWillMount() {
    const { note_id } = this.props.params;
    if (note_id) {
      notesService.fetchNote(note_id)
        .then(res => {
          this.setState({ note: res.data });
        });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { note_id } = this.props.params;
    const { note } = this.state;
    if (!note_id) this.props.createNote(note.title);
    else this.props.updateNote(note_id, note.title);
    hashHistory.push("/");
  }


  render() {
    const { note_id } = this.props.params;
    const { title } = this.state.note;

    return (<Grid>
      <h1>{!note_id ? "Nová poznámka" : "Editace poznámky"}</h1>

      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="title">
          <ControlLabel>Titulek poznámky</ControlLabel>
          <FormControl
            type="text"
            value={title}
            placeholder="Enter title of note"
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button bsStyle="primary" type="submit"><FontAwesome name="save" /></Button>

      </form>
    </Grid>);
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateNote, createNote
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
