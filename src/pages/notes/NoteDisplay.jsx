import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../../contexts/notes/NotesContext';

const NoteDisplay = () => {
  const { id } = useParams();
  const notesData = useContext(NotesContext);
  const { notes } = notesData;

  const note = notes.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className='w-[95%] mx-auto'>
      <h1 className='text-4xl capitalize font-semibold my-5 text-sidebar-bg dark:text-dark-text-secondary'>{note.title}</h1>
      <hr className='border-0 bg-primary dark:bg-[rgba(255,255,255,0.5)] h-[1px]' />
      <p className='mt-5 text-lg text-primary dark:text-dark-text-secondary'>{note.noteValue}</p>
    </div>
  );
};

export default NoteDisplay;
