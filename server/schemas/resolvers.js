const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Booking, Place } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    signUp: async (parent, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        throw new AuthenticationError('User with this email already exists');
      }
  
      const user = await User.create({ username, email, password });
      const token = signToken(user);
  
      return { token, user };
    },
  
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    bookPlace: async (parent, { bookingInput }, context) => {
      if (context.user) {
        const booking = await Booking.create({
          user: context.user._id,
          place: bookingInput.placeId,
          checkIn: bookingInput.checkIn,
          checkOut: bookingInput.checkOut,
          name: bookingInput.name,
          phone: bookingInput.phone,
          price: bookingInput.price,
        });
    
        return booking;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addPlace: async (parent, { placeInput }, context) => {
      if (context.user) {
        const place = await Place.create({
          owner: context.user._id,
          title: placeInput.title,
          address: placeInput.address,
          photos: placeInput.photos,
          description: placeInput.description,
          perks: placeInput.perks,
          extraInfo: placeInput.extraInfo,
          checkIn: placeInput.checkIn,
          checkOut: placeInput.checkOut,
          maxGuests: placeInput.maxGuests,
          price: placeInput.price,
        });
    
        return place;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};
    
  
  
  


module.exports = resolvers;
