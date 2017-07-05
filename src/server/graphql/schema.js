import { GraphQLObjectType,
         GraphQLString,
         GraphQLList,
         GraphQLSchema } from 'graphql'
import fetch from 'node-fetch'

const snowtoothAPI = 'https://www.moonhighway.com/class/api/snowtooth'

function snowtoothRequest(route) {
    return fetch(`${snowtoothAPI}${route}`).then(res => res.json())
}

function fetchLifts() {
    return snowtoothRequest('/lifts/')
}

const LiftType = new GraphQLObjectType({
    name: 'Lift',
    description: 'A ski lift',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: lift => lift.name
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
