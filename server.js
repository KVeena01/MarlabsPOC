// const http = require('http'); // default nodejs package
// const app = require('./backend/app');

// const port = process.env.PORT || 3000;

// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port);

const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => { // we are checking for a condition when env port is used, whether the
  var port = parseInt(val, 10); // port number is valid or not

  if(isNaN(port)) {
    return val;
  }

  if(port >= 0) {
    return port;
  }

  return false;
};

const onError = error => { // this checks for any error and prints respective error msg
  if(error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " +addr : "port " +port;
  switch(error.code) {
    case "EACCES":
      console.error(bind+ " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind+ " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () =>{ // logs the incoming requests and the port in which it is running
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on "+ bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port); // setting the port number on the express

const server = http.createServer(app); // set up a node server
server.on("error", onError); // error listener: goes to error block if any error is encountered
server.on("listening", onListening); // listener: goes to the execution block in which everything
server.listen(port); // goes smooth
