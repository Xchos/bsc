import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNotes, deleteNote } from '../actions/notes.action';

import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Button, ButtonGroup, Grid, Row } from 'react-bootstrap';



class NotesList extends Component {

  handleDelete = note_id => {
    this.props.deleteNote(note_id);
  }

  componentWillMount() {
    if (!this.props.notes.length) // hack due to not working API
      this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (<Grid>
      <Row>
        <h1>Seznam poznámek</h1>
        <ListGroup>
          {notes.map(note => (<ListGroupItem key={note.id}>
            {note.title}
            <ButtonGroup className="actions">
              <Button bsStyle="danger" onClick={e => this.handleDelete(note.id)}><FontAwesome name="trash" /></Button>
              <Link to={"/note/edit/" + note.id}><Button bsStyle="warning"><FontAwesome name="pencil" /></Button></Link>
            </ButtonGroup>
          </ListGroupItem>)
          )}
        </ListGroup>
      </Row>
      <ButtonGroup className="actions">
        <Link to={"/note/new"}><Button bsStyle="success"><FontAwesome name="plus" /></Button></Link>
      </ButtonGroup>
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
    fetchNotes, deleteNote
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesList);

