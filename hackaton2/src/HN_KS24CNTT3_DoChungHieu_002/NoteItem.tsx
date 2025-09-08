import { Note } from "../App";

type NoteItemProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

function NoteItem({ note, onEdit, onDelete }: NoteItemProps) {
  return (
    <div className="note-item">
      <span>{note.content}</span>
      <div>
        <button onClick={() => onEdit(note)}>Sửa</button>
        <button onClick={() => onDelete(note.id)}>Xóa</button>
      </div>
    </div>
  );
}

export default NoteItem;