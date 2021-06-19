


const postsResolvers = require('./posts')
const userResolvers = require('./users');
const commentsResolvers = require('./comments');
const { Subscription } = require('./posts');



module.exports = {
    Post: {
        likeCount: (parent) =>  parent.likes.length,
        commentCount: (parent) => parent.comments.length
        
    },
    Query: {
        ...postsResolvers.Query
     }, 
     Mutation: {
            ...userResolvers.Mutation,
            ...postsResolvers.Mutation,
             ...commentsResolvers.Mutation
        },
    Subscription: {
        ...postsResolvers.Subscription
    }
}