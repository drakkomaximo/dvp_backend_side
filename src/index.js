import app from "./app.js";
import { PORT } from "./config.js";
import { main } from "./tables/main.js";

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  main();
});
