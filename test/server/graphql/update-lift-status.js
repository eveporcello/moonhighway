import { expect } from 'chai'
import fetch from 'isomorphic-fetch'

describe('Snowtooth Graphiql', () => {
  it('Endpoint Accessible At /class/snowtooth/graphiql', (done) => {
    var query = `
      query {
        allLifts {
          name
          status
        }
      }`
      var url = 'http://localhost:3000/class/snowtooth/graphiql'
      fetch(`${url}/query=${query}`)
        .then(res => res.json())
        .then(json => expect(typeof json).to.equal('object'))
        .then(() => done())
        .catch(done)
  })

  describe('Mutations', () => {
    it('Mutates lift status')
    it('Mutates trail status')
  })
  describe('Subscriptions', () => {
    it('Can subscribe to lift status')
    it('Can subscribe trail status')
  })
})
