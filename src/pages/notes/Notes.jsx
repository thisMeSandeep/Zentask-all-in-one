import React, { useState, useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { NotesContext } from '../../contexts/notes/NotesContext';

const Notes = () => {

  const [title, setTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');
  const [id, setId] = useState(1);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [searchValue, setSearchValue] = useState('');



  const notesData = useContext(NotesContext);
  const { notes, setNotes } = notesData;



  // Function to handle title change


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  // Function to handle note change

  const handleNoteChange = (e) => {
    setNoteValue(e.target.value);
  }

  // Function to add or update a note

  const handleAddNote = () => {
    if (title.trim() === '' || noteValue.trim() === '') {
      return;
    }

    if (editingNoteId) {
      // Update note
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editingNoteId ? { ...note, title, noteValue } : note
        )
      );
      setEditingNoteId(null);
    } else {
      // Add new note
      let noteData = {
        id,
        title,
        noteValue,
      };
      setNotes([noteData, ...notes]);
      setId(prev => prev + 1);
    }

    setTitle('');
    setNoteValue('');
  }

  // Function to delete notes


  const handleDelete = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  }



  // Function to edit notes


  const handleEdit = (note) => {
    setNoteValue(note.noteValue);
    setTitle(note.title);
    setEditingNoteId(note.id);
    alert("Please scroll to top to edit!");
  }

  
  // Function to search notes


  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  // Filter notes based on search value

  const filteredNotes = searchValue.trim() === ''
    ? notes
    : notes.filter(note =>
      note.title.toLowerCase().includes(searchValue.toLowerCase())
    );



  return (

    <div className='w-[95%] mx-auto mt-5 font-poppins'>
      <div className='text-2xl font-semibold text-sidebar-bg dark:text-dark-text-secondary'>Write Notes</div>


      {/* title and input field */}


      <div>
        <div className='flex items-center justify-between my-5'>

          <p className=' text-primary text-2xl font-semibold dark:text-dark-text-primary'>Title</p>

          <div className='flex w-[50%]  lg:w-[30%] items-center border rounded-full px-2 py-1'>
            <input
              type="text"
              placeholder='Search by title'
              className='px-2  w-[90%]  text-sm sm:text-lg text-primary bg-transparent dark:text-dark-text-primary outline-none flex-1'
              onChange={handleSearch}
              value={searchValue}
            />
            <CiSearch className='text-lg dark:text-white' />

          </div>
        </div>

        <input
          type="text"
          value={title}
          placeholder='Write your title'
          className='border border-[#00000023] shadow-md block w-full text-black capitalize px-2 py-2 rounded-md focus:outline focus:outline-sidebar-bg bg-transparent  dark:border-[rgba(255,255,255,0.45)] dark:text-white'
          onChange={handleTitleChange}
        />

        <textarea
          value={noteValue}
          placeholder='Write Your Note'
          className='mt-5 border border-[#00000028] text-primary block w-full shadow-sm h-[150px] px-2 py-2 rounded-md resize-y normal-case focus:outline focus:outline-sidebar-bg focus:outline-1 bg-transparent  dark:border-[rgba(255,255,255,0.41)] dark:text-[rgba(255,255,255,0.8)]'
          onChange={handleNoteChange}
        ></textarea>

        <button
          className='mt-5 block bg-sidebar-bg hover:bg-orange-600 px-6 py-1 text-xl text-white rounded-md text-nowrap dark:bg-transparent dark:border dark:border-[rgba(255,255,255,0.5)] '
          onClick={handleAddNote}
        >Add Note</button>
      </div>


      {/* notes display */}

      {/* grid parent */}

      <div className='w-full mt-5 grid  grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 p-4 relative transition-all duration-500'>

        {/* grid childerns */}

        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {

            return (

              <li className='max-w-[200px] h-[200px] bg-white dark:bg-transparent dark:border dark:border-[rgba(255,255,255,0.5)]  note-box-shadow rounded-md relative px-2 list-none hover:scale-105 duration-300 flex flex-col group' key={note.id} title='click to view'>

                <NavLink to={`/notes/${note.id}`} className=' block w-full h-full overflow-hidden'>
                  <p className='text-sidebar-bg text-lg capitalize'>{note.title}</p>

                  <hr className='border-0 bg-secondary dark:bg-[rgba(255,255,255,0.5)] h-[1px]' />
                  
                  <div className=''>
                    <p className='w-full text-sm text-primary dark:text-dark-text-secondary  text-ellipsis'>{note.noteValue} </p>
                  </div>
                </NavLink>


                {/* notes operation */}

                <div className='flex gap-5 px-2 w-full py-1 absolute bottom-0 left-0 rounded-b-md bg-sidebar-bg z-40 lg:opacity-0 transition-all duration-500 lg:group-hover:opacity-100'>


                  {/* edit */}

                  <BiSolidPencil
                    className='text-xl text-white hover:text-blue-600 cursor-pointer' title='Edit'
                    onClick={() => handleEdit(note)}
                  />

                  {/* delete */}

                  <MdDelete
                    className='text-xl text-white hover:text-blue-600 cursor-pointer' title='Delete'
                    onClick={() => handleDelete(note.id)}
                  />

                </div>

              </li>
            )
          })
        ) : (
          <p className='text-primary text-xl dark:text-dark-text-primary'>No notes found !</p>
        )}

      </div>
    </div>
  )
}

export default Notes;
