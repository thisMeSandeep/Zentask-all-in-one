import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
    const [notes, setNotes] = useState(() => {

        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            return JSON.parse(savedNotes);
        }
        return [];
    });

    useEffect(() => {

        localStorage.setItem('notes', JSON.stringify(notes));

    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
}
