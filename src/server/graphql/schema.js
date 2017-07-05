import { GraphQLObjectType,
         GraphQLString,
         GraphQLList,
         GraphQLInt,
         GraphQLBoolean,
         GraphQLSchema } from 'graphql'
import fetch from 'node-fetch'

const snowtoothAPI = 'https://www.moonhighway.com/class/api/snowtooth'

function snowtoothRequest(route) {
    return fetch(`${snowtoothAPI}${route}`).then(res => res.json())
}

function fetchLifts() {
    return snowtoothRequest('/lifts/')
}

// function fetchTrails() {
//     return snowtoothRequest('/trails/')
// }

const LiftType = new GraphQLObjectType({
    name: 'Lift',
    description: 'A ski lift',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: lift => lift.name
        },
        type: {
            type: GraphQLString,
            resolve: lift => lift.type
        },
        capacity: {
            type: GraphQLInt,
            resolve: lift => lift.capacity
        },
        status: {
            type: GraphQLString,
            resolve: lift => lift.status
        },
        manufacturer: {
            type: GraphQLString,
            resolve: lift => lift.manufacturer
        },
        built: {
            type: GraphQLInt,
            resolve: lift => lift.built
        },
        summer: {
            type: GraphQLBoolean,
            resolve: lift => lift.summer
        },
        night: {
            type: GraphQLBoolean,
            resolve: lift => lift.night
        },
        elevation_gain: {
            type: GraphQLInt,
            resolve: lift => lift.elevation_gain
        },
        time: {
            type: GraphQLString,
            resolve: lift => lift.time
        },
        hours: {
            type: GraphQLString,
            resolve: lift => lift.hours
        },
        updated: {
            type: GraphQLBoolean,
            resolve: lift => lift.updated
        }
    })
})

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query for the Snowtooth Graph',
    fields: () => ({
        allLifts: {
            type: new GraphQLList(LiftType),
            resolve: fetchLifts
        }
    })
})

export default new GraphQLSchema({
    query: QueryType
})
