import React, { useReducer } from 'react';
import axios from 'axios';

import {
  SHOW_LOADER,
  FETCH_NOTES,
  ADD_NOTE,
  REMOVE_NOTE
} from '../types';

import firebaseReducer from './firebaseReducer';

import FirebaseContext from './FirebaseContext';


const dbUrl = process.env.REACT_APP_DB_URL;


const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();

    const res = await axios.get(`${dbUrl}/notes.json`);

    console.log('fetch notes: ', res.data);
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON()
    };

    try {
      const res = await axios.post(`${dbUrl}/notes.json`, note);

      dispatch({
        type: ADD_NOTE,
        payload: {
          ...note,
          id: res.data.name
        }
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${dbUrl}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes
      }}
    >{ children }</FirebaseContext.Provider>
  )
};


export default FirebaseState;
