import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './commentList.css';

const CommentList = ({ comments = [] }) => {

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }
  return (
    <>
      <div className="commentBox">
        <h3>Comments</h3>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light commentBoxInfo">
                <h5 className="card-header">
                  {comment.commentAuthor} Commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                {console.log()}
                <p className="card-body">{comment.commentText}</p>
                {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <Link className='commentLink' to={`/comment/${comment._id}`} type='submit' onClick={() => handleDeleteUser(commentId)}>Delete Comment</Link> : null}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
