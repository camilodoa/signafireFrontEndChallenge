import React from 'react';
import Button from 'react-bootstrap/Button';
import './css/starredButton.css';
import 'bootstrap/dist/css/bootstrap.css';


const StarredButton  = ({meta, star, unStar, starred, id}) => {
  return(
      <div key={id}>
        {meta.isStarred ? (

          <Button
          variant="warning"
          onClick={()=>unStar(id)}>
          Starred!
          </Button>

        ) : (

          <Button
          variant="outline-warning"
          size = "sm"
          onClick={()=>star(id)}>
          Star Message!
          </Button>

        )}
      </div>
  )
}

export default StarredButton;
