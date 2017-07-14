import { GraphQLObjectType,
         GraphQLString,
         GraphQLList,
         GraphQLInt,
         GraphQLBoolean,
         GraphQLSchema } from 'graphql'

import LiftType  from './LiftType'
import TrailType from './TrailType'

import fetch from 'isomorphic-fetch'

var host = (process.env.NODE_ENV === "production") ?
    "https://www.moonhighway.com" : (process.env.NODE_ENV === "staging") ?
        "http://staging-moonhighway.herokuapp.com" :
        "http://localhost:3000"

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query for the Snowtooth Graph',
    fields: () => ({
        allLifts: {
            type: new GraphQLList(LiftType),
            description: "All ski lifts at Snowtooth",
            args: {
                status: {
                    type: GraphQLString
                }
            },
            resolve: (_, {status}) => {
                var uri = `${host}/class/api/snowtooth`
                if (status) {
                    uri += `/lifts/status/${status}`
                } else {
                    uri += `/lifts`
                }
                return fetch(uri).then(r=>r.json())
            }
        },
        allTrails: {
            type: new GraphQLList(TrailType),
            description: "All ski trails at Snowtooth",
            args: {
                difficulty: {
                    type: GraphQLString
                },
                status: {
                    type: GraphQLString
                }
            },
            resolve: (_, { difficulty, status }) => {
                var uri = `${host}/class/api/snowtooth`
                if (difficulty) {
                    uri += `/trails/difficulty/${difficulty}`
                } else if (status) {
                    uri += `/trails/status/${status}`
                } else {
                    uri += `/trails`
                }
                return fetch(uri).then(r=>r.json())
            }
        },
        lift: {
            type: LiftType,
            description: "An individual ski lift at Snowtooth",
            args: {
                name: {
                    type: GraphQLString
                }
            },
            resolve: (_, { name }) => {
                var uri = `${host}/class/api/snowtooth`
                if (name) {
                    uri += `/lifts/${name}`
                }
                return fetch(uri).then(r=>r.json()).then(lifts => lifts[0])
            }
        }
    })
})

export default new GraphQLSchema({
    query: QueryType
})
