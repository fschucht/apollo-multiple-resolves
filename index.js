const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  typeDefs: `
    type Query {
      entity: Boolean!
    }
  `,
  resolvers: {
    Query: {
      entity: async () => {
        throw new Error('Some error occured');
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on('multipleResolves', (type, promise, reason) => {
  console.log('MULTIPLE RESOLVES: ', reason);
});