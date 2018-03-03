'use strict' // te permite quitar errores como que el this no contenga información del global o que no hay reasignación de variables

const setupDatabase = require('./lib/db.js') // requerimos las funciones que hemos defino antes
const setupMetricModel = require('./models/metricas.js')
const setupAgentModel = require('./models/agente.js')
const defaults = require('defaults')


module.exports = async function (config) { // como es asincrona siempre que la ejecute me devuelve una promesa

config = defaults(config, { // le pasamos datos de configuración para hacer las  pruebas unitaras
  dialect: 'sqlite', //no hace falta utilizat la bbdd que vamos a tener en pro las pruebas
  pool: {
    max:10,
    min:0,
    idle:10000
  },
  query:{
    raw: true // para que me de un json en formato facil para poder leerlo bien
  }
})


  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config) // configuración del modelo de agente
  const MetricModel = setupMetricModel(config) // esto se hace para hacer mocks y  hacer pruebas

  AgentModel.hasMany(MetricModel) // Son modelos se sequelize, es como definir la bbdd(SQL) para hacer la relación entre tablas
  MetricModel.belongsTo(AgentModel) // crean las tablas y las llaves foraneas de las tablas

  // se pone el await para esperar la respuesta de la función se podria hacer con el .then
  // se conecta a la base de datos y comprueba(Esta funcion es una promesa, podria poner.then)
  await sequelize.authenticate()

  // sequelize.sync()

  if (config.setup) {
    await sequelize.sync({ force: true }) // si la bbdd existe la borra y crea una nueva
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
