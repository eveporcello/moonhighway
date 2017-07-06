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

function fetchLift(url) {
    return snowtoothRequest(url).then(json => json[0])
}

// function fetchTrails() {
//     return snowtoothRequest('/trails/')
// }

const LiftType = new GraphQLObjectType({
    name: 'Lift',
    description: 'A ski lift at Snowtooth Mountain',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: "The name of the ski lift.",
            resolve: lift => lift.name
        },
        type: {
            type: GraphQLString,
            description: "The ski lift type.",
            resolve: lift => lift.type
        },
        capacity: {
            type: GraphQLInt,
            description: "Lift capacity for one chair/cabin.",
            resolve: lift => lift.capacity
        },
        status: {
            type: GraphQLString,
            description: "Lift status: open, closed, or hold.",
            resolve: lift => lift.status
        },
        manufacturer: {
            type: GraphQLString,
            description: "The company that manufacturered the lift.",
            resolve: lift => lift.manufacturer
        },
        built: {
            type: GraphQLInt,
            description: "The year the lift was built.",
            resolve: lift => lift.built
        },
        summer: {
            type: GraphQLBoolean,
            description: "Whether or not the lift is open in summer.",
            resolve: lift => lift.summer
        },
        night: {
            type: GraphQLBoolean,
            description: "Whether or not the lift is open for night skiing.",
            resolve: lift => lift.night
        },
        elevation_gain: {
            type: GraphQLInt,
            description: "Elevation gain of the chairlift in feet.",
            resolve: lift => lift.elevation_gain
        },
        time: {
            type: GraphQLString,
            description: "Duration of the lift ride.",
            resolve: lift => lift.time
        },
        hours: {
            type: GraphQLString,
            description: "Lift hours of operation.",
            resolve: lift => lift.hours
        },
        updated: {
            type: GraphQLString,
            description: "Time the lift status was updated/changed.",
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
            description: "All ski lifts at Snowtooth",
            resolve: fetchLifts
        },
        lift: {
            type: LiftType,
            description: "An individual ski lift at Snowtooth",
            args: {
                name: {
                    type: GraphQLString
                },
                status: {
                    type: GraphQLString
                }
            },
            resolve: (_, args) => fetchLift(`/lifts/${args.status}`)
        }
    })
})

export default new GraphQLSchema({
    query: QueryType
})
