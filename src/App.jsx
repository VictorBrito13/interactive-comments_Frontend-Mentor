import './App.css'
import { useState, useEffect } from 'react'
//*Components
import { Comment } from './components/comment.jsx'
import { SendComment } from './components/sendComment'
//*Helpers (http)
import { getComments } from './helpers/getComments'

function App() {

  const [ comments, setComments ] = useState([])


  useEffect(() => {
    getComments().then(comments => setComments(comments))
  }, [])

  return (
    <div className="comments-container">
      {
        comments.map((comment) => {
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
      <SendComment />
    </div>
  )
}

export default App
