import express from "express";
import cluster from "cluster";
import os from "os";


// if (cluster.isMaster) {
//     console.log(`Number of CPU's available for use: ${os.cpus().length}`);
//     for (let i: number = 0; i < os.cpus().length; i++) {
//         cluster.fork();
//     }   
// } else {
const app = express();

app.get("/", (req, res) => {
    const max: number = Number(req.query.max) || 1000;
    let arr: number[] = [];
    for (let i: number = 0; i <= max; i++) {
        arr.push(i);
    }

    res.json({doneMessage: "we are done"});
});

app.get("/testRoute", (req, res) => {
    res.json({testString: "This is a test string"});
});

const port: number = Number(process.env.PORT) || 3001;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
// }

cluster.on("exit", worker => {
    console.log(`Mayday, mayday, mayday!! Worker ${worker.id} died. Automatically spinning up a new one`);
    cluster.fork();
});