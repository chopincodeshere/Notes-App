import React from "react";
import ReactMarkdown from "react-markdown";

export default function Main(props) {
  const onEditField = (key, value) => {
    props.onUpdateNote({
      ...props.activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!props.activeNote)
    return <div className="no-active-note">No note selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={props.activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={props.activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{props.activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {props.activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
