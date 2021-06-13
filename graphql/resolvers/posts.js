
const { AuthenicationError, AuthenticationError } = require('apollo-server')



const Post = require('../../models/Post')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        async getPosts(){
         try{
             const post = await Post.find().sort({ createdAt: -1 });
             return post;
         } catch( err){
             throw new Error(err)
        }
        },

        async getPost(_,  {postId} ){
            try {
            const posts = await Post.findById(postId);
            if(post){
                return posts;
                
            } else {
                throw new Error('Post not found');
            }
        }catch (err){
            throw new Error(err)
        }
     }
},

Mutation: {
    async createdPost(_, { body }, context){
        const user = checkAuth(context);
        console.log('user');a

        const newPost = new Post({
            body,
            user: user.id,
            username: username,
            createdAt: new Date().toISOString()
        });

       const post = await newPost.save();

       return post
      },
      async deletePost(_, { postId }, context) {
        const user = checkAuth(context);

        try{
            const post = await Post.findById(postId);
            
            if (user.username === post.username){
                await post.delete();
                return " Post deleted succesfully"
                 } else {
                     throw new AuthenticationError('Action not allowed')
            }
        } catch(err) {
            throw new Error(err)
        }
       
      }
    }
};  