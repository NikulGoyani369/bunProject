import { Elysia } from "elysia";

const app = new Elysia()
.get("/", () => "Hello Nirmanbhai bun JS project is working................................Bun........................")
.get("/hello", ()=> "Guten Tag ").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
