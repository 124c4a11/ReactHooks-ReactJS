import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './Notes.scss';


const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {
      notes.map((note) => (
        <CSSTransition
          key={ note.id }
          classNames={ 'note' }
          timeout={ 500 }
        >
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <b>{ note.title }</b>
              <small className="ml-4">{ note.date }</small>
            </div>

            <button
              onClick={ () => onRemove(note.id) }
              type="button"
              className="btn btn-outline-danger btn-sm"
            >&times;</button>
          </li>
        </CSSTransition>
      ))
    }
  </TransitionGroup>
);


export default Notes;
