const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('message from Citizen Z', arg);

});

logger.log('Northern Lights to Operation Bite Mark!');