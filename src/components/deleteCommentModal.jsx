import './deleteCommentModal.css'

function DeleteCommentModal(props){
    return(
        <div className="modal-container">
            <div className="modal">
                <p>
                    Are you sure you want to delete this comment? This will remove the comment and cant be undone.
                </p>
                <div className="modal-actions-container">
                    <button className="modal-actions modal-actions-cancel">No, Cancel</button>
                    <button className="modal-actions modal-actions-delete">Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export { DeleteCommentModal }
