import React, { useState } from "react";

function ContentEditor({ content }: {content: any}) {
  const [editing, setEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setNewContent(content);
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <textarea value={newContent} onChange={(e) => setNewContent(e.target.value) }></textarea>
          <button onClick={() => handleSave()}>Salvar</button>
          <button onClick={() => handleCancel()}>Cancelar</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEdit}>Editar</button>
          <div dangerouslySetInnerHTML={{ __html: newContent }}></div>
        </div>
      )}
    </div>
  );
}

export default ContentEditor;
