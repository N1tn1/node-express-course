const EventEmitter = require("events");  
const emitter = new EventEmitter();  
setInterval(() => {  
  emitter.emit("timer", "Hi there");  
}, 2000);  
emitter.on("timer", (msg) => console.log(msg));  