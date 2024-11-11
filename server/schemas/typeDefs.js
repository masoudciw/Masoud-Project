const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userType: String
    posts: [Post]!
  }

  type SecretCode {
    _id: ID
    secretCodeText: String
    createdAt: String
  }

  type Post {
    _id: ID
    title: String
    price: String
    description: String
    image: String
    postAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    secretCodes: [SecretCode]!
    secretCode(secretCodeId: ID!): SecretCode
    posts: [Post]!
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, userType: String!): Auth
    addSecretCode(secretCodeText: String!): SecretCode
    removeSecretCode(secretCodeId: ID!): SecretCode
    login(email: String!, password: String!, userType: String!): Auth
    removeUser(userId: ID!): User
    updateUserType(userId: ID!, userType: String!): User
    updateEmailAddress(userId: ID!, email: String!): User
    updatePassword(userId: ID!, password: String!): User
    addPost(title: String!, price: String!, description: String!, image: String!, postAuthor: String! ): Post
    removePost(postId: ID!): Post
    updatePost(postId: ID!, title: String!, price: String!, description: String!, image: String!, postAuthor: String!): Post
  }
  `;

module.exports = typeDefs;
