import { Note } from "../App";
import NoteItem from "./NoteItem";

type NoteListProps = {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

function NoteList({ notes, onEdit, onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;