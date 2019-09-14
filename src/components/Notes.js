import React from 'react';


const Notes = ({ notes, onRemove }) => (
  <ul className="list-group">
    {
      notes.map((note) => (
        <li
          key={ note.id }
          className="list-group-item d-flex justify-content-between align-items-center"
        >
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
      ))
    }
  </ul>
);


export default Notes;
