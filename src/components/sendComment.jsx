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

function SendComment(props){
  const { avatar } = props

  return (
    <div className="send-comment-container">
      <img src={avatar} />
      <form className="send-comment">
        <textarea placeholder="Add a comment"></textarea>
        <input type="submit" value="SEND" />
      </form>
    </div>
  )

}

export { SendComment }