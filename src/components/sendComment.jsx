/*
*Comment Structure:
  {
    "content": "",
    "createdAt": "1 month ago",
    "score": 0,
    "user": {
      "image": {
        "png": "./src/assets/images/avatars/image-amyrobson.png",
        "webp": "./src/assets/images/avatars/image-amyrobson.webp"
      },
      "username": "amyrobson"
    },
    "replies": []
  }
*/
import './sendComment.css'
import { useState, useEffect } from 'react'
import { getCurrentUser } from '../helpers/getCurrentUser'


function SendComment(props){

  const [ currentUser, setCurrentUser ] = useState({ image:{} })

  useEffect(() => {
    getCurrentUser().then(user => setCurrentUser(user))
  }, [])

  return (
    <div className="send-comment-container">
      <img src={currentUser.image.webp} />
      <form className="send-comment">
        <textarea placeholder="Add a comment"></textarea>
        <input type="submit" value="SEND" />
      </form>
    </div>
  )

}

export { SendComment }