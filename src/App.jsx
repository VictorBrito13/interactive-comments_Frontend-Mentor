import './App.css'
import { useState, useEffect } from 'react'
//*Components
import { Comment, getDeleteOb } from './components/comment'
import { SendComment } from './components/sendComment'
import { DeleteCommentModal, getDeleteStateModal } from './components/deleteCommentModal'
//*Helpers (http)
import { getComments } from './helpers/getComments'

function App() {

  const [ comments, setComments ] = useState([])
  const [ deleteCommentState, setDeleteCommentState ] = useState(false)


  useEffect(() => {
    let deleteComment
    getComments().then(comments => setComments(comments))
    getDeleteOb().subscribe(value => setDeleteCommentState(value))
    getDeleteStateModal().subscribe(value => setDeleteCommentState(value))
  }, [])

  return (
    <div className="comments-container">
      {
        deleteCommentState ? <DeleteCommentModal /> : null
      }
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
