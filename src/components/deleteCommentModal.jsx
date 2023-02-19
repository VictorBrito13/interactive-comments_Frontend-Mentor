import './deleteCommentModal.css'
import { useState } from 'react'
import { BehaviorSubject } from 'rxjs'

const $deleteState = new BehaviorSubject(false)

function getDeleteStateModal(){
    return $deleteState.asObservable()
}


function DeleteCommentModal(props){

    const [ deleteCommentState, setDeleteCommentState ] = useState(false)

    function deleteCommentF(){
        setDeleteCommentState(prevState => prevState = false)
        $deleteState.next(deleteCommentState)
    }

    return(
        <div className="modal-container">
            <div className="modal">
                <p>
                    Are you sure you want to delete this comment? This will remove the comment and cant be undone.
                </p>
                <div className="modal-actions-container">
                    <button className="modal-actions modal-actions-cancel" onClick={deleteCommentF}>No, Cancel</button>
                    <button className="modal-actions modal-actions-delete">Yes, Delete</button>
                </div>
            </div>
        </div>
    )
}

export { DeleteCommentModal, getDeleteStateModal }
