const discord = require("discord.js")
const intents = discord.GatewayIntentBits;
const partial = discord.Partials

let allintents = Object.keys(intents).filter(f => isNaN(parseInt(f)));
let allpartials = Object.keys(partial).filter(f => isNaN(parseInt(f)));

module.exports = {
    intents: allintents,
    partials: allpartials
};