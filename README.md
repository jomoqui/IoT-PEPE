# Proyecto Platzi de IoT


## Usage

````js

const setupDatabase = require('platziversedb')

setupDatabase(config).then(db => {
  const { Agent, Metric } = db //nueva funcionalidad de ecma script es lo mismo que decir agent.db

}).catch(err => console.error(err))
