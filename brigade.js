const { events, Job } = require("brigadier");
events.on("push", () => {
var job = new Job("buildfinal", "docker:dind");
job.privileged = true;
job.env = {
"DOCKER_DRIVER": "overlay"
}
job.tasks = [
// "dockerd &",
"dockerd-entrypoint.sh &",
"cd /src",
"ls -l",
"docker ps",
"sleep 10"

];
job.run();
});