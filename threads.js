const cluster = require("cluster");
const os = require("os");
const { run } = require("./index");

// console.log(os.cpus().length);

if (cluster.isWorker) {
  run();
} else {
  os.cpus().forEach(() => cluster.fork());
}
