'use strict'

const test = require('ava') //para test unitarios

const agentFixtures = requiere('./fixtures/agent')

let config = {
  logging: function() {

  }
}
let db = null

test.beforeEach(async () => {
  const setupDatabase = require('../index')
  db = await setupDatabase(config)
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agente existe')
})


/* let config = {
  logging: function(){}
}
let db = null

test.beforeEach(async() => {
  const setupDatabase = require('../lib/db.js')
  db = await setupDatabase(config)
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agente existe')  //truthy que exita el valor que no sea 0
})
*/
