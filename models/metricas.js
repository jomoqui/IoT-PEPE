'use strict'

const setupDatabase = require('../lib/db')
const Sequelize = require('sequelize')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('Metrica', {
    type: {
      type: Sequelize.STRING,
      allownull: false
    },
    value: {
      type: Sequelize.TEXT,
      allownull: false
    }
  })
}
