'use strict'

const db = require('./')
const debug = require('debug')('platziverse:db:setup') //para que me muestre en que archivo estoy haciendo debug
const inquirer = require('inquirer')
const chalk = require('chalk') //para poder poner ver los errores en diferentes colores



const propmt = inquirer.createPromptModule() //son preguntas que se les lanza al usuario por lo tanto son promesas

async function setup (){

  const answer = await propmt()([
    {
      type: 'confirm',
      name: 'setup',
      message: 'Esto borrará por completo la bbdd. ¿Estás seguro?'
    }
  ])

  if(!answer.setup){
    return console.log('No pasó nada')
  }

const config = { //configuración de la ddbb.
  database: process.env.DB_NAME || 'platziverse',
  username: process.env.DB_USER || 'platzi',
  password: process.env.DB_PASS || 'admin',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: s => debug(s),
  setup: true //cuando yo estiy en mi archivo de bbdd

}

  await db(config).catch(handleFatalError)

  console.log('success')
  process.exit(0)
}

function handleFatalError (err){
  console.error(`${chalk.red('[fatal error]')} ${err.message}`) //para ver en colores los errores producidos
  console.error(err.stack)
  process.exit(1)

}
