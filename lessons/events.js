const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, second, third) => {
    console.log(`Your message: ${data}`);
    console.log(`Additional data: ${second}`);
};

emitter.on('message', callback);

const MESSAGE = process.env.MESSAGE || '';
if (MESSAGE) {
    emitter.emit("message", MESSAGE, 123);
} else {
    emitter.emit("message", 'Message not found');
}

emitter.removeAllListeners();
emitter.removeListener('message', callback);
