import Auth from '../../utils/auth';
import { DELETE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import './commentList.css';

const CommentList = ({ comments = [] }) => {
  const { postId } = useParams();
  const [deleteComment, { data }] = useMutation(DELETE_COMMENT, {
    refetchQueries: [
      QUERY_SINGLE_POST,
      'comments'
    ]
  });

  const handleDeleteUser = async (postId, arg) => {
    alert('Comment Deleted Successfully');
    try {
      const { data } = await deleteComment({
        variables: { postId: postId, commentId: arg }
      })
    } catch (err) {
      console.error(err);
    }
  };

  if (!comments.length) {
    return <h3 className='noComment'>No Comments Yet</h3>;
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
                {Auth.loggedIn() && Auth.getProfile().data.username === comment.commentAuthor ? <button className='commentLink' type='submit' onClick={() => handleDeleteUser(postId, comment._id)}>Delete Comment</button> : null}
                {/* {Auth.loggedIn() && Auth.getProfile().data.userType === 'ADMIN' ? <button className='commentLink' type='submit' onClick={() => handleDeleteUser(postId, comment._id)}>Delete Comment</button> : null} */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
