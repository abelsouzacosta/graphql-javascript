import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import "dotenv/config";

const startServer = ({ typeDefs, resolvers }) => {
  mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.connection.once("open", () => {
    console.log(`Connected to the database 🖥️`);
  });

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => console.log(`Server started on ${url}`));
};

export default startServer;
