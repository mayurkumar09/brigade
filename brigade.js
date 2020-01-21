const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("buildfinal", "docker:stable-dind-rootless");
  job.privileged = true;
   
  job.tasks = [
      "cd /src",
      "ls -l",
      "docker info",
      "dockerd &",
      "sleep 20",
      "docker ps"
  ];
  job.docker.enabled = true;
  job.run();
});
