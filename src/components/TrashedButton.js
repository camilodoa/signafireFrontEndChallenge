import React from 'react';
import Button from 'react-bootstrap/Button';
import './css/starredButton.css';
import 'bootstrap/dist/css/bootstrap.css';

/*
   Renders the trash button
  Called from MessageHolder.js
*/

const TrashedButton  = ({meta, id, trash, unTrash}) => {
  return(
      <div key={id}>
        {meta.isTrashed ? (

          <Button
          variant="outline-danger"
          size = "sm"
          onClick={()=>unTrash(id)}>
          Recover
          </Button>

        ) : (
          <Button
          variant="danger"
          onClick={()=>trash(id)}>
          Trash
          </Button>

        )}
      </div>
  )
}

export default TrashedButton;
