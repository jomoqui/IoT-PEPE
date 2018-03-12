'use strict'

const agent = {

  id:1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'pepe',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updateAt: new Date()
}

const agents = [
  agent,
  extend(agent, {id: 2, uuid: 'yyy-yyy-www', username: 'text'}), //*para esto es la funcion que hemos creado para poder cambiar los valores*/
  extend(agent, {id: 3}),
  extend(agent, {id:4, uuid: 'yyy-yyy-xxx'})
]


function extend (obj, values){ //creamos funcion para extender un obje y le aplica los siguientes valore
  const clone = Object.assign({},obj) //lo que hacemos es sustituir sus propiedades por las del objeto que queremos clonar
  return Object.assign(clone, values) //al obejto que yo clono le doy los valores

}

module.exports = { //lo exportamos para que podamo strabjar
  single: agent, //me devuelve un único agente
  all: agents, //me devuelve todos los agentes
  connected: agents.filter( a => a.connected), //me devuelve solo los conectados
  pepe: agents.filter( a => a.username === 'pepe'), //
  byUuid: id => agents.filter( a => a.uuid === id).shift(), //una por uuid, es igual al id que estoy pasando añadamos shift para que me de solo el primero
  byID: id => agents.filter( a => a.id === id).shift()
}
