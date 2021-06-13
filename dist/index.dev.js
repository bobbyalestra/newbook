"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Post{\n    id: ID!\n    body: String!\n    createdAt: String!\n    username: String!\n}\ntype Query{\n    getPosts: [Post]   \n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer;

var gql = require('graphql-tag');

var mongoose = require('mongoose');

var Post = require('./models/Post');

var _require2 = require('./config.js'),
    MONGODB = _require2.MONGODB;

var typeDefs = gql(_templateObject());
var resolvers = {
  Query: {
    getPosts: function getPosts() {
      var posts;
      return regeneratorRuntime.async(function getPosts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(Post.find());

            case 3:
              posts = _context.sent;
              return _context.abrupt("return", posts);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
mongoose.connect(MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('MongoDB Connected boyyyy');
  return server.listen({
    port: 5000
  });
}).then(function (res) {
  console.log(" Server is running on ".concat(res.url, " kidddddd "));
});