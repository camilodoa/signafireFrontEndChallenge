import React from 'react';
import './css/messages.css';
import MessageHolder from './MessageHolder';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

// sub-components ==============================================================
const RenderMessages = ({starred, star, unStar, messages, trash,
                          unTrash, searching, search}) => {
  return messages.map((message)=>{
    return (
      <div key = {message.id}>
      {message.meta.isTrashed ? (
        <div>
        </div>
      ) : (
        <MessageHolder
        id={message.id}
        handle= {message.handle}
        avatar={message.avatar}
        timestamp = {message.timestamp}
        source = {message.source}
        content = {message.content}
        score = {message.score}
        meta = {message.meta}
        starred = {starred}
        star = {star}
        unStar = {unStar}
        trash = {trash}
        unTrash = {unTrash}
        searching = {searching}
        search = {search}
        />
      )}
      </div>
    )
  })
}

const RenderTrashed = ({starred, star, unStar, messages, trash, unTrash,
                        search, searching}) => {
  return messages.map((message)=>{
    return (
      <div>
      {message.meta.isTrashed ? (
        <MessageHolder
        id={message.id}
        handle= {message.handle}
        avatar={message.avatar}
        timestamp = {message.timestamp}
        source = {message.source}
        content = {message.content}
        score = {message.score}
        meta = {message.meta}
        starred = {starred}
        star = {star}
        unStar = {unStar}
        trash = {trash}
        unTrash = {unTrash}
        search = {search}
        searching = {searching}
        />
      ) : (
        <div>
        </div>
      )}
      </div>
    )
  })
}
// end sub-components ==========================================================

// Message component ===========================================================
const Messages = ({starred, star, unStar, messages,
                    trash, unTrash, trashView, changeView, search, handleUpdate,
                  searching, changeSearch}) =>{
  return(
    <div>
      <header className = "Messages-title">
      Starred: {starred}
      </header>
      {trashView ? (
        <div>
          <header className = "Button-wrapper">
            <header className = "Trashed-header">
              <Button
              variant="outline-danger"
              size = "sm"
              onClick = {changeView}
              >
              Show Messages
              </Button>
            </header>
          </header>


          <div className = "Messages-wrapper">
            <div className = "Scrollable">
              <RenderTrashed
              starred = {starred}
              star = {star}
              unStar = {unStar}
              messages = {messages}
              trash = {trash}
              unTrash = {unTrash}
              search = {search}
              searching = {searching}/>
            </div>
          </div>
        </div>

      ):(
        <div>
          <header className = "Button-wrapper">
            <header className = "Trashed-header">
              <Button
              variant="outline-danger"
              size = "sm"
              onClick = {changeView}
              >
              Show Trashed Messages
              </Button>
            </header>

            <header className = "Search-header">
              <Form
              inline
              controlId = "formGroupEmail"

              >
                 <FormControl type="text" placeholder="Search"
                  size = "sm" className="mr-sm-2" default = ""
                  onChange = {(e) => handleUpdate(e)}
                   />
                 <Button variant="outline-primary"
                 size = "sm"
                 type = "submit"
                 onClick = {(e)=>changeSearch(e)}
                 >
                 Search
                 </Button>
              </Form>
            </header>
          </header>


          <div className = "Messages-wrapper">
            <div className = "Scrollable">
              <RenderMessages
              starred = {starred}
              star = {star}
              unStar = {unStar}
              messages = {messages}
              trash = {trash}
              unTrash = {unTrash}
              search = {search}
              searching = {searching}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
// end Message component =======================================================

export default Messages;
