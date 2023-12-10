import React from 'react';
import DeleteButton from './DeleteButton';
import ArchivedButton from './ArchiveButton';

function NotesItemAction({onDelete,onArchived,id}){
    return(
        <div className="note-item__action">
            <DeleteButton onDelete={onDelete} id={id} className="note-item__delete-button" />
            <ArchivedButton onArchived={onArchived} id={id} className="note-item__archive-button" />
        </div>  
    );
}
export default NotesItemAction;