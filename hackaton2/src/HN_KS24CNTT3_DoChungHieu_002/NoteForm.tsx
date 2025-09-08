import { useEffect, useState } from "react";
import { Note } from "../App";

type NoteFormProps = {
  addNote: (content: string) => void;
  updateNote: (id: number, content: string) => void;
  editingNote: Note | null;
};

function NoteForm({ addNote, updateNote, editingNote }: NoteFormProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = () => {
    if (!content.trim()) {
      alert("Nội dung ghi chú không được bỏ trống!");
      return;
    }
    if (editingNote) {
      updateNote(editingNote.id, content);
    } else {
      addNote(content);
    }
    setContent("");
  };

  return (
    <div className="note-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nhập ghi chú"
      />
      <button onClick={handleSubmit}>
        {editingNote ? "Lưu" : "Thêm"}
      </button>
    </div>
  );
}

export default NoteForm;