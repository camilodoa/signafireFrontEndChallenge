import React from 'react';
import './css/messageHolder.css';
import StarredButton from './StarredButton.js';
import TrashedButton from './TrashedButton.js';
import Highlighter from "react-highlight-words";

// Highlighter Component from
// https://github.com/bvaughn/react-highlight-words
// Many thanks to @bvaughn!


// Render message
const MessageHolder = ({id, handle, avatar, timestamp,
                        source, content, score, meta, starred,
                        star, unStar, trash, unTrash, search, searching}) =>{

  const searchWords = search.split(/\s/).filter(word => word);

  var time  = new Date(timestamp);

  function formatDate(date) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + ' ' +day + ', ' + year;
  }
  var longTime = formatDate(time);

  return(
  <div className = "Message-wrapper">

    {meta.isTrashed ? (
      <div>
      <div className = "Profile">
        <div>
          <img src ={avatar} alt="avatar" id="avatar"/>
        </div>

        <span className = "Handle">
          {handle}
        </span>
      </div>

      <div className = "Content">
        <div className = "SourceTime">
          <span>
          {source} | {longTime}
          </span>
        </div>

        <br/>

        <div className = "Message">
          <span>
          {content}
          </span>
        </div>
      </div>

      <div className = "Buttons">
        <div className = "Trashed">
          <TrashedButton
            meta = {meta}
            id = {id}
            trash = {trash}
            unTrash = {unTrash}/>
        </div>

        <div className = "Starred">
          <StarredButton
            meta = {meta}
            starred = {starred}
            star = {star}
            unStar = {unStar}
            id = {id}/>
        </div>
      </div>
      </div>

    ) : (
      <div>
      <div className = "Profile">
        <div>
          <img src ={avatar} alt="avatar" id="avatar"/>
        </div>

        <span className = "Handle">
          {handle}
        </span>
      </div>

      <div className = "Content">
        <div className = "SourceTime">
          <span>
          {source} | {longTime}
          </span>
        </div>

        <br/>

        <div className = "Message">
          {searching ? (
            <span>
              <Highlighter
                caseSensitive={false}
                highlightClassName={"Message"}
                highlightStyle={{ fontWeight: 'normal' }}

                searchWords={searchWords}
                textToHighlight={content}
              />
            </span>
          ):(
            <span>
              {content}
            </span>
          )}
        </div>
      </div>

      <div className = "Buttons">
        <div className = "Trashed">
          <TrashedButton
            meta = {meta}
            id = {id}
            trash = {trash}
            unTrash = {unTrash}/>
        </div>

        <div className = "Starred">
          <StarredButton
            meta = {meta}
            starred = {starred}
            star = {star}
            unStar = {unStar}
            id = {id}/>
        </div>
      </div>
      </div>
    )}
  </div>
  )
}

export default MessageHolder;
