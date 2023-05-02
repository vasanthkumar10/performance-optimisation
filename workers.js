const { parentPort, workerData } = require("worker_threads");

let { counter, total } = workerData;

console.log("worker data", workerData);
for (let i = 0; i <= total; i++) {
  counter++;
}

parentPort.postMessage(counter);
