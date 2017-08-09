import { GraphQLObjectType,
         GraphQLString,
         GraphQLBoolean,
         GraphQLList } from 'graphql'

import LiftType from './LiftType'

var host = (process.env.NODE_ENV === "production") ?
    "https://www.moonhighway.com" : (process.env.NODE_ENV === "staging") ?
        "http://staging-moonhighway.herokuapp.com" :
        "http://localhost:3000"

const TrailType = new GraphQLObjectType({
    name: 'Trail',
    description: 'A trail at Snowtooth Mountain',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: "The name of the trail.",
            resolve: trail => trail.name
        },
        difficulty: {
            type: GraphQLString,
            description: "The difficulty of the trail.",
            resolve: trail => trail.difficulty
        },
        status: {
            type: GraphQLString,
            description: "The current trail status.",
            resolve: trail => trail.status
        },
        groomed: {
            type: GraphQLBoolean,
            description: "Whether or not the trail is currently groomed.",
            resolve: trail => trail.groomed
        },
        snowmaking: {
            type: GraphQLBoolean,
            description: "Whether or not the trail has snowmaking.",
            resolve: trail => trail.snowmaking
        },
        trees: {
            type: GraphQLBoolean,
            description: "Whether or not the trail has trees.",
            resolve: trail => trail.trees
        },
        night: {
            type: GraphQLBoolean,
            description: "Whether or not the trail has night skiing.",
            resolve: trail => trail.night
        },
        liftConnection: {
            type: new GraphQLList(LiftType),
            description: "The lifts that serve this trail",
            resolve: trail => {
              return trail.lift.map(liftName => fetch(`${host}${liftName}`)
                               .then(l => l.json())
                               .then(json => json[0]))
            }
        }
    })
})







export default TrailType
