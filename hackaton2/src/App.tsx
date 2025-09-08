import { useState } from "react";
import NoteForm from "./HN_KS24CNTT3_DoChungHieu_002/NoteForm";
import NoteList from "./HN_KS24CNTT3_DoChungHieu_002/NoteList";
import "./App.css";

export interface Note {
  id: number;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const addNote = (content: string) => {
    if (!content.trim()) {
      alert("Nội dung ghi chú không được bỏ trống!");
      return;
    }
    const newNote: Note = { id: Date.now(), content };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id: number, content: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, content } : note)));
    setEditingNote(null);
  };

  const deleteNote = (id: number) => {
    if (window.confirm("Bạn có muốn xóa note này không?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="app">
      <h1>STICKY NOTE</h1>
      <NoteForm
        addNote={addNote}
        updateNote={updateNote}
        editingNote={editingNote}
      />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
    </div>
  );
}

export default App;