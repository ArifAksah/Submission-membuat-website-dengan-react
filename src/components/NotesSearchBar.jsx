import React from 'react';
 
class NoteSearchBar extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     seacrh: '',
   }
 
   this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
 }
 onSearchEventHandler(event) {
    this.setState({ search: event.target.value });
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className="note-search-bar">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.search}
          onChange={this.onSearchEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearchBar;
