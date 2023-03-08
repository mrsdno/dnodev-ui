import { app } from "./app";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT, onListening);
server.on("error", onError);




/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  console.error(error);
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {

  console.log(`Listening on port ${PORT}`);
}


