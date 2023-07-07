const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Booking {
    _id: ID
    user: User
    place: ID
    checkIn: String
    checkOut: String
    name: String
    phone: String
    price: Float
  }

  type Place {
    _id: ID
    owner: User
    title: String
    address: String
    photos: [String]
    description: String
    perks: [String]
    extraInfo: String
    checkIn: Int
    checkOut: Int
    maxGuests: Int
    price: Float
  }
  
  

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    bookPlace(bookingInput: BookingInput!): Booking
    addPlace(placeInput: PlaceInput!): Place
    signUp(username: String!, email: String!, password: String!): Auth
  }

  input BookingInput {
    placeId: ID!
    checkIn: String!
    checkOut: String!
    name: String!
    phone: String!
    price: Float!
  }

  input PlaceInput {
    title: String!
    address: String!
    photos: [String]
    description: String
    perks: [String]
    extraInfo: String
    checkIn: Int
    checkOut: Int
    maxGuests: Int
    price: Float
  }

`;

module.exports = typeDefs;
