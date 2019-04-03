import React from 'react';
import Header from './components/Header.js';
import Messages from './components/Messages.js';
import {data} from './components/data/MessageData.js';

/*
   App.js calls on Header.js to render the header and on
   Messages.js to render all of the messages
  It's here where all the state variables/methods are declared and called
*/

//to find initial # of starred:
var starred = 0;
data.messages.map((message)=>{
  if(message.meta.isStarred === true){
    starred += 1;
  }
  return true;
})


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      starred: starred,
      messages: data.messages,
      trashView: false,
      search: '',
      searching: false
    }
    this.star = this.star.bind(this);
    this.unStar = this.unStar.bind(this);
    this.trash = this.trash.bind(this);
    this.unTrash = this.unTrash.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  // state variable methods ====================================================
  star(id){
    this.setState({ starred: this.state.starred + 1 });

    var newList = this.state.messages;
    const index = newList.findIndex(item => item.id === id);
    var obj = newList[index];
    obj.meta.isStarred = true;
    newList[index]= obj;
    this.setState({messages: newList});
  }

   unStar(id){
    this.setState({ starred: this.state.starred - 1 });

    var newList = this.state.messages;
    const index = newList.findIndex(item => item.id === id);
    var obj = newList[index];
    obj.meta.isStarred = false;
    newList[index]= obj;
    this.setState({messages: newList});
  }

  trash(id){
    var newList = this.state.messages;
    const index = newList.findIndex(item => item.id === id);
    var obj = newList[index];
    obj.meta.isTrashed = true;
    newList[index]= obj;
    this.setState({messages: newList});
  }

   unTrash(id){
    var newList = this.state.messages;
    const index = newList.findIndex(item => item.id === id);
    var obj = newList[index];
    obj.meta.isTrashed = false;
    newList[index]= obj;
    this.setState({messages: newList});
  }

  changeView(){
    this.setState({trashView: !this.state.trashView});
  }

  handleUpdate(e){
    e.preventDefault();

    if(e.target.value === ""){
      this.setState({searching: false});
    }else{
      this.setState({search: e.target.value});
    }
    return false;
  }

  changeSearch(e){
    e.preventDefault();
    this.setState({searching: true});
  }

// end of state variable methods ===============================================

  render() {
    return (
        <div>
          <Header/>
          <Messages
            messages = {this.state.messages}
            starred = {this.state.starred}
            star = {this.star}
            unStar = {this.unStar}
            trash = {this.trash}
            unTrash = {this.unTrash}
            trashView = {this.state.trashView}
            changeView = {this.changeView}
            search = {this.state.search}
            handleUpdate = {this.handleUpdate}
            searching = {this.state.searching}
            changeSearch = {this.changeSearch}
          />
        </div>
    );
  }
}

export default App;
