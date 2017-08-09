import { GraphQLObjectType,
         GraphQLString,
         GraphQLInt,
         GraphQLBoolean,
         GraphQLList  } from 'graphql'

import TrailType from './TrailType'

var host = (process.env.NODE_ENV === "production") ?
    "https://www.moonhighway.com" : (process.env.NODE_ENV === "staging") ?
        "http://staging-moonhighway.herokuapp.com" :
        "http://localhost:3000"

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
        },
        trailConnection: {
            type: new GraphQLList(TrailType),
            description: "The trails off of this lift.",
            args: {
              status: {
                type: GraphQLString
              },
              difficulty: {
                type: GraphQLString
              }
            },
            resolve: (lift, args) => {
              return Promise.resolve(
                Promise.all(
                  lift.trails.map(url => fetch(host + url)
                    .then(response => response.json())
                  )).then(trails => {
                      if(args.status) {
                        return trails.filter(t => t.status === args.status)
                      } else {
                        return trails
                      }
                  }).then(filteredTrails => {
                    if(args.difficulty) {
                      return filteredTrails.filter(ft => ft.difficulty === args.difficulty)
                    } else {
                      return filteredTrails
                    }

                  }
                  )
                )
            }

        }
    })
})

export default LiftType
