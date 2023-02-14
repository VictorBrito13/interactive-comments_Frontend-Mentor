import './App.css'
import { useState, useEffect } from 'react'
//*Components
import { Comment } from './components/comment.jsx'
import { SendComment } from './components/sendComment'
//*Helpers (http)
import { getComments } from './helpers/getComments'
import { getCurrentUser } from './helpers/getCurrentUser'

function App() {

  const [ comments, setComments ] = useState([])
  const [ currentUser, setCurrentUser ] = useState({ image:{} })

  useEffect(() => {
    getComments().then(comments => setComments(comments))
    getCurrentUser().then(user => setCurrentUser(user))
  }, [])

  return (
    <div className="comments-container">
      {
        comments.map((comment, index) => {
          return (
            <Comment
            votes={comment.score}
            avatar={comment.user.image.webp}
            user={comment.user.username}
            time={comment.createdAt}
            content={comment.content}
            replies={comment.replies}
            key={comment.id} />
          )
        })
      }
      <SendComment avatar={currentUser.image.webp} />
    </div>
  )
}

export default App
