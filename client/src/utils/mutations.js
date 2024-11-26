import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!, $userType: String!) {
    login(email: $email, password: $password, userType: $userType) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $userType: String!) {
    addUser(username: $username, email: $email, password: $password, userType: $userType) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation removeUser($userId: ID!){
    removeUser(userId: $userId){
      _id
    }
  }
`;

export const UPDATE_USER_TYPE = gql`
  mutation updateUserType($userId: ID!, $userType: String!){
    updateUserType(userId: $userId, userType: $userType){
      _id
      userType
    }
  }
`;

export const UPDATE_EMAIL_ADDRESS = gql`
  mutation updateEmailAddress($userId: ID!, $email: String!){
    updateEmailAddress(userId: $userId, email: $email){
      _id
      email
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($userId: ID!, $password: String!){
    updatePassword(userId: $userId, password: $password){
      _id
      password
    }
  }
`;

export const ADD_SECRET_CODE = gql`
  mutation addSecretCode($secretCodeText: String!) {
    addSecretCode(secretCodeText: $secretCodeText) {
      _id
      secretCodeText
      createdAt
    }
  }
`;

export const DELETE_SECRET_CODE = gql`
  mutation removeSecretCode($secretCodeId: ID!){
    removeSecretCode(secretCodeId: $secretCodeId){
      _id
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $price: String!, $description: String!,$category: String!, $image: String!, $postAuthor: String!) {
    addPost(title: $title, price: $price, description: $description,category: $category, image: $image, postAuthor: $postAuthor) {
      _id
      title
      price
      description
      category
      image
      postAuthor
      createdAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation removePost($postId: ID!){
    removePost(postId: $postId){
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $title: String!, $price: String!, $description: String!,$category: String!, $image: String!, $postAuthor: String!){
    updatePost(postId: $postId, title: $title, price: $price, description: $description,category: $category, image: $image, postAuthor: $postAuthor){
      _id
      title
      price
      description
      category
      image
      postAuthor
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      title
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId){
      _id
      }
    }
`;

// export const UPLOAD_FILE = gql`
// mutation UploadFile($file: Upload!) {
//   uploadFile(file: $file) {
//     id
//     filename
//     url
//   }
// }
// `;