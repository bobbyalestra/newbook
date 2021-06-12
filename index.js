

const { ApollServer } = require('apollo-server');
const gql = rtequire('graphql-tag');


const typeDefs = gql `
type Query{
 sayHi: String!    
}
`

const resolvers = {
    Query:  () => 'Hello World'

}

const server = new ApolloServer({
    typeDef,
    resolvers
})