import { gql } from '@apollo/client';

export const GET_USERS = gql`
query getAllUsers {
  users {
    _id
    username
    email
    password
    userType
  }
}

`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
      userType
    }
  }
`;

export const QUERY_SECRET_CODES = gql`
  query getSecretCodes {
    secretCodes {
      _id
      secretCodeText
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SECRET_CODE = gql`
  query getSingleSecretCode($secretCodeId: ID!) {
    secretCode(secretCodeId: $secretCodeId) {
      _id
      secretCodeText
      createdAt
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      price
      description
      image
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      price
      description
      image
      postAuthor
      createdAt
    }
  }
`;