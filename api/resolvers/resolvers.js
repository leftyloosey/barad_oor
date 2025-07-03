import Strang from '../models/Strang.js'

const resolvers = {
  Query: {
    theQuery() {
      return 'pasolini'
    },
    strangList: async () => {
      return await Strang.find({})
    },
  },
  Mutation: {
    create: async (parent, args) => {
      const { content } = args
      const newStrang = new Strang({
        content,
      })
      await newStrang.save()
      return newStrang
    },
  },
}

export default resolvers
