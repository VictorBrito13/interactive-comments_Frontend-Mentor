function Comment(props) {
	const { votes, user, time, content } = props

	return(
		<div className="comment-container">
			<div className="votes-container">
				<img src="./src/assets/images/icon-plus.svg" className="vote-action vote-plus" />
				<span className="votes">{ votes }</span>
				<img src="./src/assets/images/icon-minus.svg" className="vote-action vote-minus" />
			</div>
			<div className="comment-info">
				<img src="./src/assets/images/avatars/image-maxblagun.webp" className="comment-avatar" />
				<h2 className="comment-user">{ user }</h2>
				<span className="comment-time">{ time }</span>
				<img src="./src/assets/images/icon-reply.svg" />
			</div>
			<p className="comment-content">{ content }</p>
		</div>
	)
}

export { Comment }