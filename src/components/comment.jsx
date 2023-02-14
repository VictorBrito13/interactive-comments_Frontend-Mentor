import './comment.css'

function Comment(props) {
	const { votes, avatar, user, time, content, replies } = props

	return (
		<div className="comment-container">
			<div className="votes-container">
				<span className='vote-action-container'>
					<img src="./src/assets/images/icon-plus.svg" className="vote-action vote-plus" />
				</span>
				<span className="votes">{ votes }</span>
				<span className="vote-action-container">
				<img src="./src/assets/images/icon-minus.svg" className="vote-action vote-minus" />
				</span>
			</div>
			<div className="comment-info-container">
				<span className='comment-info'>
					<img src={avatar} className="comment-avatar" />
					<h2 className="comment-user">{ user }</h2>
					<span className="comment-time">{ time }</span>
				</span>
				<span className='reply-container'>
					<img src="./src/assets/images/icon-reply.svg" />
					<span>Reply</span>
				</span>
			</div>
			<p className="comment-content">{ content }</p>
			<div className="comment-replies-container">
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

export { Comment }