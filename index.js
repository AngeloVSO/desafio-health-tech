const { ApolloServer } = require('apollo-server')
const graphql = require('./src/graphql')

const server = new ApolloServer({
    ...graphql,
    formatError: (err) => {
      return {message: err.message}
    }
  });
  
  server.listen(4000, () => {
    console.log("Server is runnig at 4000");
  });
  