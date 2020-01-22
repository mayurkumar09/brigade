const { events, Job } = require("brigadier");
events.on("push", () => {
var job = new Job("buildfinal", "docker:dind");
job.privileged = true;
job.tasks = [
// "dockerd &",
"dockerd-entrypoint.sh &",
"sleep 10",
"cd /src",
"ls -l",
"docker ps"

];
job.run();
});