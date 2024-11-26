const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
// const { graphqlUploadExpress } = require('graphql-upload');
const {Image } = require('./models');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { Query, Mutation } = require('./schemas/resolvers');
const PORT = process.env.PORT || 3001;
// import cors from 'cors';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.post("/api/upload", async (req, res) => {
  try {
    const { image } = req.body;

    const newImage = new Image({
      name: "uploaded-image",
      data: image,
    });

    await newImage.save();

    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Error uploading image" });
  }
});

const startApolloServer = async () => {
  await server.start();
  // app.use(graphqlUploadExpress());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());


  app.use('/graphql',
    // cors < cors.CorsRequest > ({ origin: ['https://localhost:3000/', 'https://studio.apollographql.com'], csrfPrevention: false }),
    expressMiddleware(server, {
      context: authMiddleware,
    }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
