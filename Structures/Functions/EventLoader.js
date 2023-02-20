const { loadFiles } = require("./FileLoader") 
const { CustomClient } = require("../Classes/CustomClient")

/**
 * @param {String} folderName
 * 
 */

async function loadEvents(Client){

let Loaded = 0
let Failed = 0

const files = await loadEvents("Events")

file.forEach(file => {

    const event = require(file)
    if(!event.name) return Failed++

    if(event.once) client.once(event.name, (...args) => event.execute(...args, client))

    else client.on(event.name, (...args) => event.execute(...args, client))

    Loaded++
})

if (Loaded !==0) console.log(`✔ ${Loaded}`)
if (Failed !==0) console.log(`❌ ${Failed}`)

}

module.exports = { loadEvents }