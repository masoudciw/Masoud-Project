const { User, SecretCode, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts');;
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate('posts');;
    },
    secretCodes: async () => {
      return SecretCode.find();
    },
    secretCode: async (parent, { secretCodeId }) => {
      return SecretCode.findOne({ _id: secretCodeId });
    },
    posts: async (parent, { userId }) => {
      const params = userId ? { userId } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, userType }) => {
      const user = await User.create({ username, email, password, userType });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    updateUserType: async (parent, { userId, userType }) => {
      return User.findByIdAndUpdate(
        userId, { userType: 'ADMIN' }, { new: true }
      )
    },
    updateEmailAddress: async (parent, { userId, email }) => {
      return User.findByIdAndUpdate(
        userId, { email: email }, { new: true }
      )
    },
    updatePassword: async (parent, { userId, password }) => {
      return User.findByIdAndUpdate(
        userId, { password: await bcrypt.hash(password, 10) }, { new: true },
      );
    },
    addSecretCode: async (parent, { secretCodeText }) => {
      const secretCode = await SecretCode.create({ secretCodeText });

      return secretCode;
    },
    removeSecretCode: async (parent, { secretCodeId }) => {
      return SecretCode.findOneAndDelete({ _id: secretCodeId });
    },
    addPost: async (parent, { title, price, description, image, postAuthor }) => {
      const post = await Post.create({ title, price, description, image, postAuthor });

      await User.findOneAndUpdate(
        { userId: postAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    updatePost: async (parent, { postId, title, price, description, image, postAuthor }) => {
      return Post.findByIdAndUpdate(
        postId, { title: title, price: price, description: description, image: image, postAuthor: postAuthor }, { new: true }
      )
    },
  },
};

module.exports = resolvers;
