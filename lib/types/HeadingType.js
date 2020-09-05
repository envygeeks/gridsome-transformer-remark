const { GraphQLInt, GraphQLString, GraphQLEnumType, GraphQLObjectType } = require('gridsome/graphql')
const HeadingType = new GraphQLObjectType({
  name: 'RemarkHeading',
  fields: {
    depth: {
      default: undefined,
      type: GraphQLInt
    },
    value: {
      type: GraphQLString,
      default: undefined
    },
    anchor: {
      type: GraphQLString,
      default: undefined
    }
  }
})

const HeadingLevels = new GraphQLEnumType({
  name: 'RemarkHeadingLevels',
  values: {
    h1: { value: 1 },
    h2: { value: 2 },
    h3: { value: 3 },
    h4: { value: 4 },
    h5: { value: 5 },
    h6: { value: 6 }
  }
})

module.exports = {
  HeadingType,
  HeadingLevels
}
