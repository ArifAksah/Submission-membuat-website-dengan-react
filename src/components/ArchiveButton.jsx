import React from 'react';
function ArchivedButton({id,onArchived}){
    return <button className='note-item__archive-button' onClick={()=>onArchived(id)}>archived</button>
}

export default ArchivedButton;