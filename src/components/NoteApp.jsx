import React from 'react';
import NoteList from './NoteList';
import {getInitialData} from '../utils/index';
import NotesInput from './NoteInput';


class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes:getInitialData(),
        }
        this.onDeleteHandler=this.onDeleteHandler.bind(this);
        this.onAddNoteHandler=this.onAddNoteHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }
    
    onAddNoteHandler({title,body}){
        this.setState((prevState)=>{
            return {
                notes:[
                    ...prevState.notes,
                    {
                        id:+new Date(),
                        title,
                        body,
                        createdAt:new Date().toISOString(),
                        archived:false
                    }
                ]
            }
        });
    }
    render(){
        return(
            <div className="note-app__body">
                <NotesInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}
export default NoteApp;