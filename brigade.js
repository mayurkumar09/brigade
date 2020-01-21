const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("buildfinal", "docker:stable-dind");
  job.privileged = true;
   
  job.tasks = [
      "cd /src",
      "ls -l",
      "docker run --rm -it --privileged docker:stable-dind",
      "docker info",
      "dockerd &",
      "sleep 20",
      "docker ps"
  ];
  job.docker.enabled = true;
  job.run();
});
