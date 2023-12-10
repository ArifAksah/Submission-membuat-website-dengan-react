import React from 'react';

class NotesInput extends React.Component{
    constructor(props){
        super(props)
        //inisialisasi state
        this.state={
            title:'',
            body:'',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler=this.onSubmitEventHandler.bind(this);       
    }
    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return {
                title: event.target.value,
            }
        });
    }
    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return {
                body: event.target.value,
            }
        });
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render(){
        return (
            <div className='note-input'>
            <h2>Buat Catatan</h2>
            <form  onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder='title' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea placeholder='body'  cols="30" value={this.state.body} rows="10" onChange={this.onBodyChangeEventHandler}>
                </textarea>
            <button type="submit">Buat</button>
            </form>
            </div>
        )
    }
}
export default NotesInput;