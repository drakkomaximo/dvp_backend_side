import app from "./app.js";
import { NODE_DOCKER_PORT } from "./config.js";
import { main } from "./tables/main.js";

app.listen(NODE_DOCKER_PORT, () => {
  console.log("Server running on port", NODE_DOCKER_PORT);
  main();
});
