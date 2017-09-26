// import { expect } from "chai"
// import fetch from "isomorphic-fetch"
//
// describe("Snowtooth Graphiql", () => {
//     var url = "http://localhost:3000/class/snowtooth/graphiql"
//     it("Endpoint Accessible At /class/snowtooth/graphiql", done => {
//         var query = `
//           query {
//             allLifts {
//               name
//               status
//             }
//           }`
//         fetch(`${url}/?query=${query}`)
//           .then(res => res.json())
//           .then(json => expect(typeof json).to.equal("object"))
//           .then(() => done())
//           .catch(done)
//     })
//
//     describe("Mutations", () => {
//         var url = "http://localhost:3000/class/snowtooth/graphiql"
//         it("Mutates lift status", done => {
//             var mutation = `
//               mutation {
//                 setLiftStatus(name: "Panorama", status: "closed") {
//                   name
//                   status
//                 }
//               }`
//             var expectedResults = {
//                 data: {
//                     setLiftStatus: {
//                         name: "Panorama",
//                         status: "closed"
//                     }
//                 }
//             }
//             fetch(`${url}/?query=${mutation}`, { method: "POST" })
//                 .then(res => res.json())
//                 .then(results => expect(results).to.deep.equal(expectedResults))
//                 .then(() => done())
//                 .catch(done)
//         })
//         it("Mutates trail status", done => {
//             var mutation = `
//               mutation {
//                   setTrailStatus(name: "Golden Ticket", status: "closed") {
//                     name
//                     status
//                 }
//               }`
//             var expectedResults = {
//                 data: {
//                     setTrailStatus: {
//                         name: "Golden Ticket",
//                         status: "closed"
//                     }
//                 }
//             }
//             fetch(`${url}/?query=${mutation}`, {method: "POST"})
//                 .then(res => res.json())
//                 .then(results => expect(results).to.deep.equal(expectedResults))
//                 .then(() => done())
//                 .catch(done)
//         })
//     })
//     describe("Subscriptions", () => {
//         it("Can subscribe to lift status")
//         it("Can subscribe trail status")
//     })
// })
