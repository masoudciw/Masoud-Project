import React from 'react';
import { DELETE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

const SingleComment = () => {

    const { commentId } = useParams();
    const [deleteComment, { error }] = useMutation(DELETE_COMMENT, { variables: { commentId: commentId } });

    const handleDeleteUser = async (commentId) => {
        alert('Comment Deleted Successfully');
        try {
            const { data } = await deleteComment({
                variables: { commentId },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <form>
                <button type='submit' onClick={() => handleDeleteUser(commentId)}></button>
            </form>
        </>
    );
};

export default SingleComment;