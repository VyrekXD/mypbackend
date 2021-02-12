require('dotenv').config()

const RPCID = process.env.RPCID
const rpc = require('discord-rich-presence')(RPCID)
const startTimestamp = new Date();

rpc.updatePresence({
    details: `Testeando MyPrecenses`,
    state: 'Testing',
    startTimestamp,
    instance: true
})