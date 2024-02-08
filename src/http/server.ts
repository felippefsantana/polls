import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";

const app = fastify();
const port = 3333;

app.register(cookie, {
  secret: "FDfskjf328A!3:fl;?",
  hook: "onRequest"
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port }).then(() => {
  console.log(`HTTP server listening on ${port}`);
});
