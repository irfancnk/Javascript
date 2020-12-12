// How JavaScript is Single Threaded and Async
// It does define a job queue (browser-oriented folks call it an "event loop")
// and run-to-completion semantics for jobs


console.log("1");
setTimeout( function() {
    console.log("2");
}, 0);
console.log("3");
setTimeout( function() {
    console.log("4");
}, 1);
// When the timeout is 0, then the output of the code will be,
// 1 3 2 4
// ADD EXECUTION TO EVENTLOOP
// START EXECUTION OF MAIN PROGRAM
// WRITE 1
// ADD WRITING 2 AFTER 0 SECONDS TO EVENTLOOP
// WRITE 3
// ADD WRITING 4 AFTER 1 SECOND TO EVENTLOOP
// EXECUTION FINISHED
// IDLE FOR A BIT
// TIMER MECHANISM DETERMINED ITS TIME FOR TIMEOUT AND ADDED IT TO JOB QUEUE
// WRITE 2
// IDLE FOR A BIT
// TIMER MECHANISM DETERMINED ITS TIME FOR TIMEOUT AND ADDED IT TO JOB QUEUE
// WRITE 4
