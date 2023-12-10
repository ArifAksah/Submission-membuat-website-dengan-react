import React from 'react';
import NotesItemBody from './NoteItemBody';
import NotesItemAction from './NoteAction';

function NoteItem({title,body,createdAt,onDelete,onArchived,id}){
    return (
        <div className="note-item">
            <NotesItemBody title={title} createdAt={createdAt} body={body} />
            <NotesItemAction onDelete={onDelete} onArchived={onArchived} id={id} />
        </div>
    )
}
export default NoteItem;