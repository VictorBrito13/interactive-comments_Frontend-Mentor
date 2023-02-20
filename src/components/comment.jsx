import { useState, useEffect } from 'react'
import './comment.css'
import { SendComment, $getCurrentUser } from './sendComment'
import { BehaviorSubject } from 'rxjs'

const $deteleOb = new BehaviorSubject(false)
function getDeleteOb() {
	return $deteleOb.asObservable()
}

function Comment(props) {
	let { votes, avatar, user, time, content, replies } = props

	let [ score, setVotes ] = useState(votes)
	let [ replyComponent, setReplyComponent ] = useState(false)
	let [ deleteComment, setDeleteComment ] = useState(true)
	let [ currentUser, setCurrentUser ] = useState(null)

	useEffect(() => {
		let user
		$getCurrentUser().subscribe(obUser => user = obUser)
		setCurrentUser(user)
	}, [])

	function vote(action){
		if(action === 'plus'){
			setVotes(prevState => prevState + 1)
		}else{
			setVotes(prevState => prevState - 1)
		}
	}

	function reply(){
		setReplyComponent(prevState => !prevState)
	}

	function deleteCommentF(){
		setDeleteComment(prevState => prevState = true)
		$deteleOb.next(deleteComment)
	}

	return (
		<div className="comment-container">
			<div className="votes-container">
				<span className='vote-action-container' onClick={ () => vote('plus')}>
					<img src="./src/assets/images/icon-plus.svg" className="vote-action vote-plus" />
				</span>
				<span className="votes">{ score }</span>
				<span className="vote-action-container" onClick={ () => vote('minus')}>
				<img src="./src/assets/images/icon-minus.svg" className="vote-action vote-minus" />
				</span>
			</div>
			<div className="comment-info-container">
				<span className='comment-info'>
					<img src={avatar} className="comment-avatar" />
					<h2 className="comment-user">{ user }</h2>
					<span className="comment-time">{ time }</span>
				</span>
			</div>
			{
				user === currentUser?.username ?

				<span className="actions-container">

					<span className="actions-delete" onClick={deleteCommentF}>
					<img src="./src/assets/images/icon-delete.svg" />
						Delete
					</span>

					<span className="actions-update" onClick={reply}>
						<img src="./src/assets/images/icon-edit.svg" />
						Edit
					</span>
				</span>

				:

				<span className='reply-container' onClick={reply}>
					<img src="./src/assets/images/icon-reply.svg" />
					<span>Reply</span>
				</span>
			}
			<p className="comment-content">{ content }</p>
			<div className="comment-replies-container">
				{ replyComponent ? <SendComment /> : null }
				{
					replies?.map((replay) => {
						return(
							<Comment
							votes={replay.score}
							avatar={replay.user.image.webp}
							user={replay.user.username}
							time={replay.createdAt}
							content={replay.content}
							key={replay.id}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export { Comment, getDeleteOb }