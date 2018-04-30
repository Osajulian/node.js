const EventEmitter = require('events');


class Logger extends EventEmitter {
log(message) {
    console.log(message);

    //Raise an Event 
    this.emit('messageLogged', {message: 'Zona forces attack Nothern Lights!'});
}
};
module.exports = Logger;